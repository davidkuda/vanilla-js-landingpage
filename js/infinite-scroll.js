// this module should enable infinte scroll. It does the job, but is buggy. needs debugging.

// show / hide loader at the bottom of the page

const showLoading = () => {

    loading.classList.add('show')

    setTimeout(

        function() {

            loading.classList.remove('show');

            setTimeout(

                function() {
                    appendNewNavLi();
                    appendNewSection();
                    increaseSectionCounter();
                },
                300
            )
        },

        1000
    );
};

const hideLoading = () => {
    loading.classList.remove('show')
};

// event listener: if bottom is reached with scroll, append a new section to <main>

window.addEventListener('scroll', () => {

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
        showLoading();
    };
});