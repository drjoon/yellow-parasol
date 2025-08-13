import React from "react";
import { Umbrella } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#3b5998" }} className="text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="flex items-center mb-3">
              <Umbrella className="h-7 w-7 mr-2" />
              <div>
                <h2 className="font-bold text-base">노란우산 투자조합</h2>
                <p className="text-xs opacity-80">
                  Yellow Parasol Investment Partnership
                </p>
              </div>
            </div>
            <p className="text-xs opacity-90">
              고소득 개인사업자를 위한 효율적인 노후대책 투자조합
            </p>
          </div>

          <div className="md:col-span-1 text-sm opacity-90">
            <p className="mb-6">
              * 본 투자는 벤처기업육성에 관한 특별법에 근거하여 운영됩니다.
            </p>
            <p className="mb-1">
              * 투자비는 원금 손실의 위험이 있으니 신중히 검토 후 투자하시기
              바랍니다.
            </p>
          </div>

          <div className="md:col-span-1 text-xs text-right opacity-80 self-end">
            <p className="mb-2">
              <strong>대표: </strong> 이준호
            </p>
            <p className="mt-2">
              <strong>이메일: </strong>
              <a href="mailto:drjoon@gmail.com" className="hover:underline">
                drjoon@gmail.com
              </a>
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} 노란우산 투자조합. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
