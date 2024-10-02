import { useNavigate } from 'react-router-dom';
import { Result, Button } from 'antd';
function NotFound() {
    const navigate = useNavigate();
    const base = import.meta.env.VITE_PATH;
    return (
        <div className='h-full flex items-center justify-center'>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={() => navigate(`/${base}/home`)}>Back Home</Button>}
            />
        </div>
    )
}

export default NotFound