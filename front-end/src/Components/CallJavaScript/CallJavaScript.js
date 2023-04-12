import { Helmet } from 'react-helmet';

export default function CallJavaScript() {
    return (
        <Helmet>
            <script src="../../assets/js/main.js"></script>
            <script src="i18next.min.js"></script>
            <script src="i18n.js"></script>
        </Helmet>
    );
}
