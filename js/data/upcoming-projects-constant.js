
export const upcoming_projects = [
    {
        project_name: "Jawa Lang",
        technologies: [
            'C'
        ],
        repo_link_github: "https://github.com/Fredo-Ronan/Jawa-lang",
        supported_os: "Windows",
        accordion_data: [
            {
                id: 1,
                title_accordion: `What is this project about?`,
                description: `This project is just a fun project to create new programming language insipre by Javanese language OR "Bahasa Jawa"
                in one of million culture exists in Indonesia.`
            },
            {
                id: 2,
                title_accordion: `How it works?`,
                description: `The source code must be in the format of .jawa for the file extension ({fileName}.jawa).<br><br> 
                This programming language get executed
                with the kind of interpreter method like Python programming language. So, the interpreter will parse the .jawa source code file
                and convert it to C language.<br><br> 
                After converting to C language, gcc compiler get invoke to compile that converted C source code
                into .exe format that windows can execute it imediately. All of this process runs automatically.`
            },
            {
                id: 3,
                title_accordion: `What are the rules?`,
                description: `<ul style="padding-left: 10px;">
                                    <li>Each statement or operation terminate with (.) period sign</li>
                                    <li>Automatically add new lines characters '\\n' after (.) period sign</li>
                                    <li>If you don't want the new line characters just add 'noEnter' flag after period sign on the end of a statement</li>
                                    <li>No data types, it's almost dynamically interpret the data type by looking the data you want to store to variable</li>
                                </ul>`,
            },
            {
                id: 4,
                title_accordion: `How to executed it?`,
                description: `The source code of this new programming language store in a text file with the extension .jawa ({fileName}.jawa).<br><br>
                After finished to write the jawa source code, the user/programmer just type in the 'jawa.exe' command on CMD (Command Prompt)
                follow with the source code file name and then press ENTER.<br><br> 
                After that, the result should be imediately appear as a windows console
                application.`
            },
            {
                id: 5,
                title_accordion: `What are being develop?`,
                description: `<ul style="padding-left: 10px;">
                                <li>If, else if, and else kind of operation</li>
                                <li>Also not forget about continously doing bug fixes even during adding more features</li>
                            </ul>`
            }
        ],
        picture: '',
        custom_width_picture: 'NULL'
    },
    {
        project_name: "Fredo Downloader",
        technologies: [
            'Python',
            'Flet'
        ],
        repo_link_github: "https://github.com/Fredo-Ronan/Fredo_Downloader",
        supported_os: "Windows, Android",
        accordion_data: [
            {
                id: 1,
                title_accordion: `What is this?`,
                description: `This is my own app for downloading instagram reels and youtube videos in one app.`
            },
            {
                id: 2,
                title_accordion: `How to use it?`,
                description: `To use this app, you can install it first according to your platform sepcific that available on the release page. 
                After that for downloading the instagram reels you can do that by copying the share link of instagram video reels and put it 
                to the text field with the hint "Enter Instagram Link" and download it using the Download button. For the youtube video is 
                actually the same process and for the link you can copy from the youtube video url or using the share link button.`
            },
            {
                id: 3,
                title_accordion: `Some fact about this project`,
                description: `This project actually is succession from the previous project which is 
                <a href="" target="_blank" style="text-decoration: underline;">Instagram Downloader</a> and therefore the characteristic 
                of this app such as can only download 1 posted instagram video reels not a sequence of media posted on one instagram post 
                like the previous <a href="https://github.com/Fredo-Ronan/Android-IG-Downloader-using-Python" target="_blank" style="text-decoration: underline;">Instagram Downloader</a>. 
                The different of this project is the UI framework use in this app and the feature added which is the Youtube Video Downloader.`
            },
            {
                id: 4,
                title_accordion: `Is there any release yet?`,
                description: `This app already have released version 1.0.0 but with only Instagram Reels Downloader and only support on Android.
                You can go to the latest release page here => 
                <a href="https://github.com/Fredo-Ronan/Fredo_Downloader/releases/latest" target="_blank" style="text-decoration: underline;">V1.0.0</a>`
            },
            {
                id: 5,
                title_accordion: `What are being develop?`,
                description: `The Youtube Downloader functionality is not perfect yet and also look further for any bug that occur
                on the released version.`
            }
        ],
        picture: "assets/fredo_downloader_demo.png",
        custom_width_picture: "1"
    }
]