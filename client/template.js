export default function(styledComponents, Mui, body, title) {
    return `
    <!DOCTYPE html>
    <html lang="pl">
        <head>
            <meta charset="UTF-8" />
            <title>${title}</title>
        </head>
        <body>
            <div id="app">${body}</div>
        </body>
    </html>
`;
}
