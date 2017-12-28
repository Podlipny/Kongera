export interface IResource {
  menu: {
    about: string,
    contact: string
  };
  about: {
    header: string,
    article: string
  };
  contact: {
    header: string,
    nameTitle: string,
    sendBtn: string,
    nameLabel: string,
    phoneLabel: string,
    emailLabel: string,
    messageLabel: string,
    emailSend: string
  };
  error: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };
}
