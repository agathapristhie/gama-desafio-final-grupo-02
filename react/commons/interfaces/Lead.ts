export default interface Lead {
    name: string;
    email: string;
    phone: number|string;
    date?: string;
    client?: boolean;
  }