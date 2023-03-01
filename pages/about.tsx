import { FirstStack, LeftStack, RightStack, LastStack } from "../components/about/stack";
import type { NextPage } from "next";

interface AboutProps {}

const About: NextPage<AboutProps> = () => {
  return (
    <>
      <main>
        <FirstStack></FirstStack>
        <LeftStack mainText={`헷갈렸던 분리수고 \n정보, 한눈에 확인`} subText={`버릴 때마다 헷갈리는 버리는 방법,\n블리수고에서 확인하세요!`} />
        <RightStack
          mainText={`편하게 물어봐요,\n쓰레기 버리는 방법`}
          subText={`블리수고에 없더라도 걱정하지 마세요.\n커뮤니티에서 편하게 질문을 주고 받을 수 있어요.`}
        />
        <LeftStack mainText={`일상에 스며드는 \n친환경 생활`} subText={`블리수고가 준비한 친환경 생활 콘텐츠로 \n일상에서도 에코 지수를 더해요.`} />
        <LastStack></LastStack>
      </main>
    </>
  );
};

export default About;
