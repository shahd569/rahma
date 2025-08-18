import Document, {Html,Head,Main,NextScript} from 'next/Document'
class MyDocument extends Document {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href='/font-awesome/css/all.min.css'></link>
                </head>
            </html>
        )
    }
}