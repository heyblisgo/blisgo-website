"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USER,
    pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
  },
  secure: true,
});

export const sendEmail = async (formData: FormData, id: string) => {
  try {
    const { requestName, returnEmail, editRequest, details } = Object.fromEntries(formData);

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_GMAIL_USER,
      to: process.env.NEXT_PUBLIC_GMAIL_USER,
      subject: `[블리스고 문의]`,
      html: `<h3>문의 페이지 ID: ${id}</h3>
      <p>이름(닉네임): <strong>${requestName}</strong></p>
      <p>답변 메일 주소: <strong>${returnEmail}</strong></p>
      <p>수정 요청 페이지: <strong>${editRequest}</strong></p>
      <p>상세 내용: <strong>${details}</strong></p>`,
    });
    console.log("메일 전송 성공");

    return { message: "send email", state: true };
  } catch (error) {
    console.log(error);
  }
};
