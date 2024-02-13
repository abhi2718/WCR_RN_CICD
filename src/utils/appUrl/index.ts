import { config } from '../config';

export class AppUrl {
  public static readonly BASE_URL = config.API_URL;
  public static readonly COMETCHAT_BASE_URL = `https://${config.APP_ID}.api-${config.REGION}.cometchat.io/v3`;
  public static userEndPoint = `${this.BASE_URL}/users`;
  public static authEndPoint = `${this.BASE_URL}/auth`;
  public static userUpdatedetails = `${this.BASE_URL}/user`;
  public static otpEndPoint = `${this.BASE_URL}/otp`;
  public static resendOtpEndPoint = `${this.BASE_URL}/otp/resend`;
  public static userReactionEndPoint = `${this.BASE_URL}/useraction`;
  public static favouriteEndPoint = `${this.BASE_URL}/favourite`;
  public static blockUserEndPoint = `${this.BASE_URL}/blocked`;
  public static showProfileViewEndPoint = `${this.BASE_URL}/profile-view?profileViewId=`;
  public static searchUserEndPoint = `${this.BASE_URL}/user/search?searchValue=`;
  public static notificationEndPoint = `${this.BASE_URL}/notification`;
  public static matchEndPoint = `${this.BASE_URL}/matched`;
  public static comentChatFriendListUrl = `${this.COMETCHAT_BASE_URL}/conversations`;
  public static cloudinarySignatureEndPoint = `${this.BASE_URL}/auth/signature`;
  public static userEndPoints = `${this.BASE_URL}/user`;
  public static contactUsEndPoint = `${this.BASE_URL}/contact-us`;
  public static preferenceEndPoint = `${this.BASE_URL}/preference`;
  public static reportEndPoint = `${this.BASE_URL}/report`;
  public static notificationCountEndPoint = `${this.notificationEndPoint}/user/notification/count`;
  public static stripeEndPoint = `${this.BASE_URL}/payment/intent`;
}
