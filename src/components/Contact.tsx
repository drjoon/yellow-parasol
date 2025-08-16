import React, { useRef, useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const form = useRef(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (data: ContactFormData) => {
    const errors = [];

    if (!data.name || data.name.trim().length < 2) {
      errors.push("성함은 최소 2글자 이상 입력해주세요.");
    }

    if (!data.message || data.message.trim().length < 10) {
      errors.push("내용은 최소 10글자 이상 입력해주세요.");
    }

    if (data.message && data.message.length > 1000) {
      errors.push("내용은 1000글자 이내로 입력해주세요.");
    }

    // 전화번호 유효성 검사 (선택사항이므로 입력했을 때만)
    if (data.phone && data.phone.trim()) {
      const phoneRegex = /^[0-9-+\s()]{8,20}$/;
      if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
        errors.push("올바른 전화번호 형식을 입력해주세요.");
      }
    }

    return errors;
  };

  const sendContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const contactData: ContactFormData = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    const apiUrl =
      "https://0mri4b4l4g.execute-api.ap-south-1.amazonaws.com/prod/api/contact";

    console.log("전송 데이터:", contactData);
    console.log("API URL:", apiUrl);
    console.log("현재 Origin:", window.location.origin);

    try {
      // OPTIONS preflight 요청 먼저 테스트
      console.log("OPTIONS 요청 테스트 시작...");
      const optionsResponse = await fetch(apiUrl, {
        method: "OPTIONS",
        headers: {
          Origin: window.location.origin,
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers": "Content-Type",
        },
      });

      console.log("OPTIONS 응답:", {
        status: optionsResponse.status,
        statusText: optionsResponse.statusText,
        headers: Object.fromEntries(optionsResponse.headers.entries()),
      });

      // 실제 POST 요청
      console.log("POST 요청 시작...");
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
        },
        mode: "cors",
        credentials: "omit", // credentials 제거해서 테스트
        body: JSON.stringify(contactData),
      });

      console.log("POST 응답:", {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("응답 에러 내용:", errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      console.log("성공 응답:", result);
      return result;
    } catch (error) {
      console.error("상세 에러 정보:");
      console.error("- 에러 타입:", error.constructor.name);
      console.error("- 에러 메시지:", error.message);
      console.error("- 전체 에러:", error);

      // 네트워크 에러인지 확인
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        console.error("이것은 네트워크 레벨 에러입니다. 가능한 원인:");
        console.error("1. CORS 설정 문제");
        console.error("2. 네트워크 연결 문제");
        console.error("3. 서버가 응답하지 않음");
        console.error("4. SSL/TLS 인증서 문제");
      }

      throw error;
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          문의하기
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form ref={form} onSubmit={sendContact} className="space-y-6">
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700 pb-2"
              >
                성함 <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="name"
                id="user_name"
                required
                disabled={isSubmitting}
                placeholder="홍길동"
                minLength={2}
                maxLength={50}
              />
            </div>

            <div>
              <label
                htmlFor="user_phone"
                className="block text-sm font-medium text-gray-700 pb-2"
              >
                전화번호 <span className="text-gray-400">(선택사항)</span>
              </label>
              <Input
                type="tel"
                name="phone"
                id="user_phone"
                disabled={isSubmitting}
                placeholder="010-1234-5678"
                maxLength={20}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 pb-2"
              >
                내용 <span className="text-red-500">*</span>
              </label>
              <Textarea
                name="message"
                id="message"
                rows={4}
                required
                disabled={isSubmitting}
                placeholder="문의하실 내용을 자세히 작성해주세요. (최소 10글자)"
                minLength={10}
                maxLength={1000}
              />
              <p className="text-sm text-gray-500 mt-1">
                최소 10글자, 최대 1000글자까지 입력 가능합니다.
              </p>
            </div>

            <div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? "전송 중..." : "전송"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
