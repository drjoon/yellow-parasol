import React, { useRef, useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const resData = await response.json();

      if (response.ok && resData.success) {
        toast({
          title: "전송 완료",
          description: "메시지 확인 후 연락드리겠습니다.",
        });
        form.current?.reset();
      } else {
        throw new Error(resData.error || "서버 오류");
      }
    } catch (error) {
      toast({
        title: "전송 실패",
        description: "오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
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
                성함
              </label>
              <Input type="text" name="name" id="user_name" required />
            </div>
            <div>
              <label
                htmlFor="user_phone"
                className="block text-sm font-medium text-gray-700 pb-2"
              >
                전화번호
              </label>
              <Input type="tel" name="phone" id="user_phone" />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 pb-2"
              >
                내용
              </label>
              <Textarea name="message" id="message" rows={4} required />
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
