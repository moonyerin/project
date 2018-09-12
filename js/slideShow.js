$(document).ready(function () {
    $('.slide-container').slideWiz(
        {
            auto: true,
            speed: 3000,
            type : 'box3D',
            file : [
                {
                    src: "https://picsum.photos/1920/1200?image=1081",
                    title: 'jQuery slideWiz Plugin',
                    desc: 'Description 1',
                    btnTitle: 'Action Button',
                    btnUrl: 'https://www.jqueryscript.net/'
                },
                 {
                    src: "https://picsum.photos/1920/1200?image=760",
                    title: 'jQuery slideWiz Plugin',
                    desc: 'Description 2',
                    btnTitle: 'Action Button',
                    btnUrl: 'https://www.jqueryscript.net/'
                },
                 {
                    src: "https://picsum.photos/1920/1200?image=755",
                    title: 'jQuery slideWiz Plugin',
                    desc: 'Description 3',
                    btnTitle: 'Action Button',
                    btnUrl: 'https://www.jqueryscript.net/'
                },
                 {
                    src: "https://picsum.photos/1920/1200?image=726",
                    title: 'jQuery slideWiz Plugin',
                    desc: 'Description 4',
                    btnTitle: 'Action Button',
                    btnUrl: 'https://www.jqueryscript.net/'
                },
            ]

        }
    );
});
