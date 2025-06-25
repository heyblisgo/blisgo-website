"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { sendEmail } from "@/lib/mailAction";

const inputClassName =
  "input input-bordered w-full focus:outline-none border-yellow-green border rounded-lg px-4 focus-within:border-primary-green focus:border-primary-green";

const style = { "--value": 40, "--size": "1.5rem" } as React.CSSProperties;

export default function WrongInfoModal({ id }: { id: string }) {
  const [isToast, setIsToast] = useState(false);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [requireErrors, setRequireErrors] = useState({ requestName: false, returnEmail: false, editRequest: false });

  const toastWrongInfoForm = () => {
    setIsToast(true);
  };

  async function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { requestName, returnEmail, editRequest } = event.currentTarget;
    if (!requestName.value || requestName.value === "") {
      setRequireErrors((prev) => ({ ...prev, name: true }));
      return;
    }
    if (!returnEmail.value || returnEmail.value === "") {
      setRequireErrors((prev) => ({ ...prev, returnEmail: true }));
      return;
    }
    if (!editRequest.value || editRequest.value === "") {
      setRequireErrors((prev) => ({ ...prev, editRequest: true }));
      return;
    }

    setIsEmailLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      await sendEmail(formData, id);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsEmailLoading(false);
    }

    setRequireErrors({ requestName: false, returnEmail: false, editRequest: false });
    setIsToast(false);
  }

  const closeHandler = () => {
    setIsToast(false);
  };

  return (
    <>
      <button className="bg-primary-green rounded-lg w-20 h-12 flex justify-center items-center" onClick={toastWrongInfoForm}>
        <Image src="/assets/icon/info.svg" alt="wrong info icon" width={20} height={20} />
      </button>
      {isToast && (
        <div className="toast toast-center z-[100] w-full">
          <form
            onSubmit={onSubmitHandler}
            className="w-3/6 max-w-[36rem] m-auto h-auto px-6 py-6 flex flex-col justify-start items-center gap-3 bg-white rounded-lg shadow-lg border border-lightgrey-1"
          >
            <div className="flex w-full justify-end">
              <button
                onClick={closeHandler}
                className="btn btn-xs btn-circle btn-outline border-primary-green hover:bg-primary-green hover:border-primary-green group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-primary-green group-hover:stroke-white" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="form-control w-full px-8">
              <label className="label">
                <span className="label-text">
                  이름 (혹은 닉네임)<span className="text-red-600">*</span>
                </span>
              </label>
              <input
                name="requestName"
                type="text"
                placeholder="이름을 입력해주세요"
                className={inputClassName}
                onChange={() => setRequireErrors((prev) => ({ ...prev, name: false }))}
              />
              {requireErrors.requestName && <span className="text-xs text-red-600 mt-1"> 이름을 입력해주세요</span>}
            </div>
            <div className="form-control w-full px-8">
              <label className="label">
                <span className="label-text">
                  답변받을 이메일 주소<span className="text-red-600">*</span>
                </span>
              </label>
              <input
                name="returnEmail"
                type="text"
                placeholder="답변받을 이메일 주소를 입력해주세요"
                className={inputClassName}
                onChange={() => setRequireErrors((prev) => ({ ...prev, returnEmail: false }))}
              />
              {requireErrors.returnEmail && <span className="text-xs text-red-600 mt-1">답변받을 이메일을 입력해주세요</span>}
            </div>
            <div className="form-control w-full px-8">
              <label className="label">
                <span className="label-text">
                  수정요청 페이지 (쓰레기 이름 등)<span className="text-red-600">*</span>
                </span>
              </label>
              <input
                name="editRequest"
                type="text"
                placeholder="수정이 필요한 페이지를 입력해주세요"
                className={inputClassName}
                onChange={() => setRequireErrors((prev) => ({ ...prev, editRequest: false }))}
              />
              {requireErrors.editRequest && <span className="text-xs text-red-600 mt-1">수정요청 페이지를 입력해주세요</span>}
            </div>
            <div className="form-control w-full px-8">
              <label className="label">
                <span className="label-text">상세 내용</span>
              </label>
              <div className="rounded-xlborder-1 border-transparent">
                <textarea
                  name="details"
                  className="resize-none w-full focus:outline-none border-yellow-green border rounded-lg p-3 focus-within:border-primary-green focus:border-primary-green"
                  placeholder="수정이 필요한 상세 내용을 입력해주세요"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="bg-primary-green rounded-lg w-20 h-12 flex justify-center items-center">
              {isEmailLoading ? <div className="radial-progress text-white animate-spin" style={style}></div> : <span className="text-white">제출</span>}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
