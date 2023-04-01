const createStarBox = () => {
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
  
    const right = Math.floor(Math.random() * window.innerWidth - 400);
    starBox.style.right = `${right}px`;
  
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
  
  setInterval(() => {
    createStarBox();
  }, 1000);