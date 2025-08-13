# AWS S3 + Route 53 + SSL 설정 가이드

## 1. S3 버킷 설정

### 1.1 버킷 생성 및 기본 설정

```bash
# S3 버킷 생성 (리전: ap-south-1)
aws s3api create-bucket \
  --bucket yellow-parasol \
  --region ap-south-1 \
  --create-bucket-configuration LocationConstraint=ap-south-1

# 정적 웹사이트 호스팅 활성화
aws s3 website s3://yellow-parasol/ --index-document index.html --error-document index.html
```

### 1.2 퍼블릭 액세스 설정

```bash
# 퍼블릭 액세스 차단 해제
aws s3api put-public-access-block \
  --bucket yellow-parasol \
  --public-access-block-configuration 'BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false'

# 버킷 정책 설정 (doc/bucket-policy.json 파일 생성 필요)
{
  "Version":"2012-10-17",
  "Statement":[{
    "Sid":"PublicReadGetObject",
    "Effect":"Allow",
    "Principal": "*",
    "Action":["s3:GetObject"],
    "Resource":["arn:aws:s3:::yellow-parasol/*"]
  }]
}

# 버킷 정책 적용
aws s3api put-bucket-policy --bucket yellow-parasol --policy file://doc/bucket-policy.json
```

### 1.3 CORS 설정 (필요시)

```bash
# CORS 설정 (doc/cors.json 파일 생성 필요)
aws s3api put-bucket-cors --bucket yellow-parasol --cors-configuration file://doc/cors.json
```

## 2. Route 53 설정

### 2.1 호스팅 영역 생성

```bash
# 호스팅 영역 생성
aws route53 create-hosted-zone --name yellow-parasol.com --caller-reference $(date +%s)

# 생성된 호스팅 영역 확인
aws route53 list-hosted-zones-by-name --dns-name yellow-parasol.com
```

Z01710891VV8UQNGZI49K

### 2.2 도메인 등록기관에 NS 레코드 등록

호스팅 영역 생성 시 출력된 NS 레코드 4개를 도메인 등록기관의 네임서버로 설정
"ns-1984.awsdns-56.co.uk",
"ns-908.awsdns-49.net",
"ns-5.awsdns-00.com",
"ns-1116.awsdns-11.org"

### 2.3 A 레코드 생성 (S3 엔드포인트로 연결)

```bash
# doc/change-batch.json 파일 생성
{
  "Comment": "S3 website alias",
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "yellow-parasol.com",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z11RGJOFQNVJUP",  # ap-south-1 리전의 S3 HostedZoneId
          "DNSName": "s3-website.ap-south-1.amazonaws.com.",
          "EvaluateTargetHealth": false
        }
      }
    }
  ]
}

# 레코드 등록
aws route53 change-resource-record-sets \
  --hosted-zone-id Z01710891VV8UQNGZI49K \
  --change-batch file://doc/change-batch.json
```

## 3. SSL 인증서 발급 (ACM)

### 3.1 인증서 요청

```bash
# 인증서 요청 (반드시 us-east-1 리전에서 실행)
aws acm request-certificate \
  --domain-name yellow-parasol.com \
  --validation-method DNS \
  --subject-alternative-names www.yellow-parasol.com \
  --region us-east-1
```

"CertificateArn": "arn:aws:acm:us-east-1:106055905364:certificate/471982f9-105f-44b3-bb98-b701b78ee177"

### 3.2 인증서 검증을 위한 CNAME 레코드 등록

```bash
# 인증서 정보 확인 (ARN 복사)
aws acm describe-certificate \
  --certificate-arn arn:aws:acm:us-east-1:106055905364:certificate/471982f9-105f-44b3-bb98-b701b78ee177 \
  --region us-east-1

# doc/validate-certificate.json 파일 생성
{
  "Changes": [
    {
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "[CNAME_NAME_FROM_ACM]",
        "Type": "CNAME",
        "TTL": 300,
        "ResourceRecords": [
          {
            "Value": "[CNAME_VALUE_FROM_ACM]"
          }
        ]
      }
    }
  ]
}

# CNAME 레코드 등록
aws route53 change-resource-record-sets \
  --hosted-zone-id Z01710891VV8UQNGZI49K \
  --change-batch file://doc/validate-certificate.json
```

### 3.3 인증서 상태 확인

```bash
aws acm describe-certificate \
  --certificate-arn arn:aws:acm:us-east-1:106055905364:certificate/471982f9-105f-44b3-bb98-b701b78ee177 \
  --region us-east-1
```

## 4. CloudFront 배포

### 4.1 CloudFront 배포 생성

```bash
# doc/create-distribution.json 파일 생성
{
  "CallerReference": "my-distribution",
  "Aliases": {
    "Quantity": 2,
    "Items": ["yellow-parasol.com", "www.yellow-parasol.com"]
  },
  "DefaultRootObject": "index.html",
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "S3-yellow-parasol",
        "DomainName": "yellow-parasol.s3.ap-south-1.amazonaws.com",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        }
      }
    ]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-yellow-parasol",
    "ViewerProtocolPolicy": "redirect-to-https",
    "AllowedMethods": {
      "Quantity": 3,
      "Items": ["GET", "HEAD", "OPTIONS"],
      "CachedMethods": {
        "Quantity": 2,
        "Items": ["GET", "HEAD"]
      }
    },
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": {
        "Forward": "none"
      },
      "Headers": {
        "Quantity": 0
      },
      "QueryStringCacheKeys": {
        "Quantity": 0
      }
    },
    "MinTTL": 0,
    "DefaultTTL": 86400,
    "MaxTTL": 31536000
  },
  "ViewerCertificate": {
    "ACMCertificateArn": "arn:aws:acm:us-east-1:106055905364:certificate/471982f9-105f-44b3-bb98-b701b78ee177",
    "SSLSupportMethod": "sni-only",
    "MinimumProtocolVersion": "TLSv1.2_2021"
  },
  "Comment": "",
  "Enabled": true
}

# CloudFront 배포 생성
aws cloudfront create-distribution \
  --distribution-config file://doc/create-distribution.json
```

## 5. Route 53 A 레코드 업데이트 (CloudFront로 연결)

```bash
# doc/update-a-record.json 파일 생성
{
  "Comment": "Alias to CloudFront",
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "yellow-parasol.com",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",  # CloudFront의 고정 HostedZoneId
          "DNSName": "d3nxonwfndkuq9.cloudfront.net.",
          "EvaluateTargetHealth": false
        }
      }
    }
  ]
}

# A 레코드 업데이트
aws route53 change-resource-record-sets \
  --hosted-zone-id Z01710891VV8UQNGZI49K \
  --change-batch file://doc/update-a-record.json
```

## 6. 배포 및 캐시 무효화

```bash
# 빌드 및 S3 동기화
npm run build
aws s3 sync ./dist s3://yellow-parasol --delete

# CloudFront 캐시 무효화
aws cloudfront create-invalidation \
  --distribution-id E11DKNSWFC60JR \
  --paths "/*"
```

## 문제 해결

1. **인증서 상태가 "PENDING_VALIDATION"에서 변경되지 않을 때**

   - CNAME 레코드가 정확히 등록되었는지 확인
   - DNS 전파를 위해 최대 30분까지 기다려보기

2. **403 Forbidden 오류**

   - S3 버킷 정책이 올바르게 설정되었는지 확인
   - CloudFront Origin Access Identity(OAI) 설정 확인

3. **Mixed Content 경고**

   - 모든 리소스가 HTTPS로 로드되는지 확인
   - Content Security Policy(CSP) 헤더 확인

4. **변경사항이 바로 반영되지 않을 때**
   - 브라우저 캐시 삭제
   - CloudFront 캐시 무효화 실행

## 참고 사항

- CloudFront 배포는 완료되는 데 최대 30분까지 소요될 수 있습니다.
- DNS 변경사항은 전 세계적으로 전파되는 데 최대 48시간이 소요될 수 있습니다.
- 테스트 시에는 `dig` 또는 `nslookup` 명령어로 DNS 전파 상태를 확인하세요.

```bash
# DNS 확인
nslookup yellow-parasol.com
# 또는
dig yellow-parasol.com
```
