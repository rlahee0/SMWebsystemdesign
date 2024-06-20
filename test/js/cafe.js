document.addEventListener('DOMContentLoaded', function() {
    const ratingForm = document.getElementById('ratingForm');
    const reviewsSection = document.getElementById('reviews');

    ratingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const cafe = document.getElementById('cafe-select').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const comment = document.getElementById('comment').value;

        // 사용자가 남긴 리뷰를 화면에 추가
        const review = document.createElement('div');
        review.className = 'review';
        review.innerHTML = `<strong>카페: ${cafe}</strong><br><strong>별점: ${rating}</strong><p>${comment}</p>`;
        reviewsSection.appendChild(review);

        // 폼 초기화
        ratingForm.reset();
    });
});