window.addEventListener('scroll', () => {

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
        console.log('bottom reached')
        // showLoading();
    }

    console.log(document.documentElement.scrollHeight);
});

