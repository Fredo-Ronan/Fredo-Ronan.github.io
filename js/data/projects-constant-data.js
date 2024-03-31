
export const projects_data = [
    {
        project_name: "Live Chat Web App",
        technologies: [
            'Socket IO',
            'Express JS',
            'Node JS',
            'Javascript',
            'HTML5',
            'CSS3'
        ],
        repo_link_github: "https://github.com/Fredo-Ronan/Live-Chat-Web",
        supported_os: "Windows, Linux, MacOS",
        accordion_data: [
            {
                id: 1,
                title_accordion: `What is this project about?`,
                description: `Multi users web application that can be use to chat to each other users in realtime. This can be used by multiple users
                in the same time, so multiple user can talk/chat each other on the same publicly available to all user who are currently
                doing chat on this web app.`
            },
            {
                id: 2,
                title_accordion: `What are the features?`,
                description: `<ul style="padding-left: 10px;">
                                <li>Text Message</li>
                                <li>Voice Note Message</li>
                                <li>Send Photo (Realtime using camera or taken from galery)</li>
                                <li>Send Links (Anything that contains 'https://' are become clickable when it's send)</li>
                                <li>Dark Mode</li>
                            </ul>`
            }
        ],
        picture: 'assets/live-chat-demo.png',
        custom_width_picture: 'NULL'
    },
    {
        project_name: "Instagram Downloader",
        technologies: [
            'Python',
            'Kivy'
        ],
        repo_link_github: "https://github.com/Fredo-Ronan/Android-IG-Downloader-using-Python",
        supported_os: "Windows, Android",
        accordion_data: [
            {
                id: 1,
                title_accordion: `What is this?`,
                description: `This is my own app for download instagram video reels.`
            },
            {
                id: 2,
                title_accordion: `How to use it?`,
                description: `To use this app you have to install it according to the supported OS platform available on the release page.
                After that you can simply copy the link from the instagram reels video post using the share link and paste that link 
                to the field with the hint text says "Enter Instagram Link". After that you can click the 'Download' button and wait 
                until the pop up says "Successfuly Download bla bla bla".
                `
            },
            {
                id: 3, 
                title_accordion: `Any limitations?`,
                description: `This app will only download an instagram post that contain only one post, not more. For example if 
                there is a post contains some photos and also reels videos in one post that can be slide through and you want to 
                download the reels video one only, this app is simply cannot do that.`
            }
        ],
        picture: "assets/ig_downloader_demo.png",
        custom_width_picture: "NULL"
    },
    {
        project_name: "Snake Game in C",
        technologies: [
            'C'
        ],
        repo_link_github: "https://github.com/Fredo-Ronan/Snake-Game-Console-without-graphics.h",
        supported_os: "Windows",
        accordion_data: [
            {
                id: 1,
                title_accordion: `What is the different?`,
                description: `This snake game is build with C programming language. Usually when making snake game in C, some programmers are using
                library that can be use to render the graphic called graphics.h OR graphic library header file for C language. But in this project
                snake game was build without using any kind of graphic library including graphics.h from the C language library itself.`
            },
            {
                id: 2,
                title_accordion: `How it works?`,
                description: `Since this snake game was build without using graphics.h library, the visual was made by pure array of characters that later will be
                visit 1 by 1 and show it on the screen each of index that being visited using nested for loop. 
                There are several array of character. One of them is array of characters that contains character that will be use for the arena
                for the snake to run. `
            },
            {
                id: 3,
                title_accordion: `What are the features?`,
                description: `<ul style="padding-left: 10px;">
                                <li>Pause the game while playing it</li>
                                <li>
                                    Store the history of the players that ever play this snake game
                                    <img src="https://user-images.githubusercontent.com/128687596/229768005-349115bc-96f0-427f-b281-7ac2c36b373e.png" style="width: 80%;">
                                </li>
                                <li>Persistence of the history data by taking advantage of a text file created automatically</li>
                            </ul>`
            }
        ],
        picture: "https://user-images.githubusercontent.com/128687596/230856656-8397bdf4-502c-4c4e-92d4-87ffca699512.gif",
        custom_width_picture: '1.4'
    }
]