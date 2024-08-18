import { TailSpin } from 'react-loader-spinner';

export default function loader() {
    return (
        <div className="loader">
            <TailSpin height="80" width="80" color="blue" ariaLabel="loading" />
        </div>
    );
}