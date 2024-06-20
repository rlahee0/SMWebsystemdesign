document.addEventListener('DOMContentLoaded', function() {
    const ratingForm = document.getElementById('ratingForm');
    const reviewsSection = document.getElementById('reviews');

    // Load existing reviews from localStorage
    const reviews = JSON.parse(localStorage.getItem('movieReviews')) || [];
    const username = localStorage.getItem('username');
    const adminUsername = 'admin'; // 관리자 계정 설정

    const loadReviews = () => {
        reviewsSection.innerHTML = '';
        reviews.forEach((review, index) => {
            const reviewBox = document.createElement('div');
            reviewBox.className = 'review-box';
            reviewBox.innerHTML = `
                <strong>영화/드라마: ${review.movie}</strong><br>
                <strong>별점: ${review.rating}</strong><br>
                <strong>작성자: ${review.username}</strong>
                <p>${review.comment}</p>
                ${username === adminUsername ? `<button class="delete-button" data-index="${index}">삭제</button>` : ''}
            `;
            reviewsSection.appendChild(reviewBox);
        });
    };

    loadReviews();

    ratingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const movie = document.getElementById('movie-select').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const comment = document.getElementById('comment').value;

        if (!username) {
            alert('로그인 후에 리뷰를 작성할 수 있습니다.');
            return;
        }

        const review = {
            movie,
            rating,
            comment,
            username
        };

        reviews.push(review);
        localStorage.setItem('movieReviews', JSON.stringify(reviews));
        loadReviews();

        ratingForm.reset();
    });

    reviewsSection.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            const index = event.target.getAttribute('data-index');
            reviews.splice(index, 1);
            localStorage.setItem('movieReviews', JSON.stringify(reviews));
            loadReviews();
        }
    });
});