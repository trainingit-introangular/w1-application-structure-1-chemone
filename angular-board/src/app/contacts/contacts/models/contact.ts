export interface Contact{
  name: string;
  isVIP: boolean;
  gender: string;
  //puede ser de dos tipos distintos
  workStatus: number | string;
  company: string;
  education: string;
}
