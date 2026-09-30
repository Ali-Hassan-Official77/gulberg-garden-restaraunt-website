import './globals.css';
import {AppProvider} from '@/components/providers';
export const runtime = 'edge';
export const metadata={title:'Gulberg Garden Kitchen',description:'Fresh plates. Lahore energy.',icons:{icon:'/logo.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className="site-editorial"><AppProvider>{children}</AppProvider>

<script src="https://cdn.zanderio.ai/widget/loader.js" data-id="wdg_HUA8oLN8tF6fcfbqxrSJcbkI" defer></script>
</body></html>}
