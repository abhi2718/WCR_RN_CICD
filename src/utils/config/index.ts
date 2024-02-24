import { CLIENTID } from '@env';
const isProduction = !true;
export const config = {
  API_URL: isProduction
    ? 'https://app.whitecoatromance.com/api'
    : 'https://staging.whitecoatromance.com/api',
  //'http:/192.168.1.3:8000/api',
  CLIENTID,
  WEBCLIENTID:
    '646347262122-r6p03otrumh84bl4r5clq38hgk3t839u.apps.googleusercontent.com',
  APP_ID: isProduction ? '2422522403fd36e8' : '239776c0feb68d65',
  AUTH_KEY: isProduction
    ? '5a97381b48262090818b4287816f791dbc236731'
    : 'bf02994ce40f950273890dc19da88624528b0f82',
  REGION: 'us',
  COMET_CHAT_API_KEY: isProduction
    ? '6fba42b4423cb05a7dda4d9eb40161dc90aaf0c2'
    : '571e6e5ee3f7c6447878c4b05e7ea68769e6d1a6',
  STRIPE_KEY:
    'pk_test_51OLhmuILb85dzDST7I4QIzg7ySW2r2a5hXLUeLgCqw1ujyxUZbtW1PTUyx5kg0cmbB5Y2Aw8KcP91UpREG5ZCmau0073JGv0fo',
  CloudinaryUploadURL: isProduction
    ? 'https://api.cloudinary.com/v1_1/white-coat-romance-llc/image/upload?api_key=815672331287861'
    : 'https://api.cloudinary.com/v1_1/wcr-byldd/image/upload?api_key=262427781712771',
};
