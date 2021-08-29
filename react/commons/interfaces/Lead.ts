export default interface Lead {
    name: string;
    email: string;
    phone: string;
    date?: string;
    clientDate?: string;
    client?: boolean;
  }