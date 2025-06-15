"use client";

export default function Editor() {
  return (
    <div className="flex-1 bg-[#1e1e1e] flex">
      {/* 라인 넘버 */}
      <div className="w-12 bg-[#1e1e1e] border-r border-[#3e3e42] py-4 px-2">
        <div className="text-white/40 text-sm font-mono text-right space-y-1">
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i + 1}>{i + 1}</div>
          ))}
        </div>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div className="flex-1 p-6 font-mono text-sm leading-7">
        <div className="text-white/90 max-w-4xl">
          {/* JSX 스타일 포트폴리오 */}
          <div className="text-gray-500 mb-4">// 고세미 포트폴리오</div>
          
          <div className="mb-6">
            <span className="text-purple-400">import</span>{" "}
            <span className="text-blue-300">React</span>{" "}
            <span className="text-purple-400">from</span>{" "}
            <span className="text-orange-300">'react'</span>;
          </div>

          <div className="mb-8">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-300">Developer</span> = () =&gt; &#123;
          </div>

          <div className="ml-4 mb-6">
            <span className="text-purple-400">return</span> (
          </div>

          <div className="ml-8 space-y-3">
            <div>&lt;<span className="text-red-400">div</span> <span className="text-green-300">className</span>=<span className="text-orange-300">"portfolio"</span>&gt;</div>
            
            <div className="ml-4">
              &lt;<span className="text-red-400">header</span>&gt;
            </div>
            
            <div className="ml-8 space-y-2">
              <div>&lt;<span className="text-red-400">h1</span>&gt;<span className="text-white">👋 안녕하세요, 고세미입니다!</span>&lt;/<span className="text-red-400">h1</span>&gt;</div>
              <div>&lt;<span className="text-red-400">p</span>&gt;<span className="text-white">Frontend Developer • React 전문 • 19개월 경력</span>&lt;/<span className="text-red-400">p</span>&gt;</div>
            </div>
            
            <div className="ml-4">
              &lt;/<span className="text-red-400">header</span>&gt;
            </div>

            <div className="mt-4 ml-4">
              &lt;<span className="text-red-400">section</span> <span className="text-green-300">className</span>=<span className="text-orange-300">"experience"</span>&gt;
            </div>
            
            <div className="ml-8 space-y-2">
              <div>&lt;<span className="text-red-400">h2</span>&gt;<span className="text-white">🚀 주요 경험</span>&lt;/<span className="text-red-400">h2</span>&gt;</div>
              <div>&lt;<span className="text-red-400">ul</span>&gt;</div>
              <div className="ml-4">&lt;<span className="text-red-400">li</span>&gt;<span className="text-white">React 17 → 18 마이그레이션 담당</span>&lt;/<span className="text-red-400">li</span>&gt;</div>
              <div className="ml-4">&lt;<span className="text-red-400">li</span>&gt;<span className="text-white">실시간 협업 에디터 개발 (Tmax Gaia)</span>&lt;/<span className="text-red-400">li</span>&gt;</div>
              <div className="ml-4">&lt;<span className="text-red-400">li</span>&gt;<span className="text-white">단위 테스트 최적화 (성능 70% 향상)</span>&lt;/<span className="text-red-400">li</span>&gt;</div>
              <div>&lt;/<span className="text-red-400">ul</span>&gt;</div>
            </div>
            
            <div className="ml-4">
              &lt;/<span className="text-red-400">section</span>&gt;
            </div>

            <div className="mt-4 ml-4">
              &lt;<span className="text-red-400">section</span> <span className="text-green-300">className</span>=<span className="text-orange-300">"skills"</span>&gt;
            </div>
            
            <div className="ml-8 space-y-2">
              <div>&lt;<span className="text-red-400">h2</span>&gt;<span className="text-white">🛠️ 기술 스택</span>&lt;/<span className="text-red-400">h2</span>&gt;</div>
              <div className="ml-4 space-y-1">
                <div><span className="text-white">Frontend: </span><span className="text-blue-300">TypeScript, React, MobX, SCSS</span></div>
                <div><span className="text-white">Testing: </span><span className="text-yellow-300">Puppeteer, Cucumber</span></div>
                <div><span className="text-white">Tools: </span><span className="text-green-300">Vite, Git</span></div>
              </div>
            </div>
            
            <div className="ml-4">
              &lt;/<span className="text-red-400">section</span>&gt;
            </div>

            <div className="ml-4">
              &lt;/<span className="text-red-400">div</span>&gt;
            </div>
          </div>

          <div className="ml-4 mt-6">
            );
          </div>

          <div className="mt-4">
            &#125;
          </div>

          <div className="mt-6">
            <span className="text-purple-400">export default</span>{" "}
            <span className="text-blue-300">Developer</span>;
          </div>

          {/* 하단 코멘트 */}
          <div className="mt-8 text-gray-500">
            <div>// 💼 현재: Tmax Gaia에서 에디터 개발</div>
            <div>// 🎯 목표: 사용자 경험을 개선하는 프론트엔드 개발자</div>
            <div>// 📧 연락: 언제든 환영합니다!</div>
          </div>
        </div>
      </div>
    </div>
  );
}