const createStarBox = () => {
    // star-box 요소 생성
    const starBox = document.createElement('div');
    starBox.className = 'star-box';
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.innerHTML = `
      <p class="star-after3">*</p>
      <p class="star-after2">+　。</p>
      <p class="star-after1">*+</p>
      <p class="star">★</p>
    `;
    starBox.appendChild(shootingStar);
    document.body.appendChild(starBox);
  
    // 랜덤한 위치 계산
    const right = Math.floor(Math.random() * window.innerWidth - 400);
  
    // star-box 요소 위치 조정
    starBox.style.right = `${right}px`;
  
    // 8초 후에 star-box 요소 삭제
    let start = null;
    const animate = timestamp => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      if (elapsed < 8000) {
        requestAnimationFrame(animate);
      } else {
        starBox.parentNode.removeChild(starBox);
      }
    };
    requestAnimationFrame(animate);
  };
  
  // 1초마다 createStarBox 함수 호출
  setInterval(() => {
    createStarBox();
  }, 1000);