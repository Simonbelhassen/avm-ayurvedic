import { AppointmentStatus, AppointmentType, Days, NotificationTypes, VideoSectionStatus } from "./enum";

export interface IPatient {
   _id?: string;
   name?: string;
   email?: string;
   password?: string;
   phone?: string;
   bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
   dob?: Date;
   isSubscribed?: boolean;
   isBlocked?: boolean;
   address?: string;
   profile?: string;
   occupation?: string;
   gender?: "Male" | "Female" | "Other";
}

export interface IDoctor {
   _id?: string;
   name?: string;
   phone?: string;
   password?: string;
   qualifications?: string[];
   isBlocked?: boolean;
   image?: string;
   email?: string;
   updatedAt?: string;
   createdAt?: string;
   isVerified?: boolean;
}

export interface ISlot {
   _id?: string;
   doctorId?: string;
   day?: Days;
   startTime?: string;
   endTime?: string;
   status?: "available" | "booked";
}

export interface IAppointment {
   readonly _id?: string;
   readonly doctorId?: string;
   readonly patientId?: string;
   readonly slotId?: string;
   readonly createdAt?: string;
   readonly updatedAt?: string;
   readonly appointmentType?: AppointmentType;
   readonly appointmentDate?: string;
   readonly reason?: string;
   readonly notes?: string;
   status?: AppointmentStatus;
}

export interface IExtendedAppointment extends IAppointment {
   patient?: IPatient;
   slot?: ISlot;
   doctor?: IDoctor;
}

export interface INotification {
   readonly _id?: string;
   readonly patientId?: string;
   readonly doctorId?: string;
   readonly type?: NotificationTypes;
   readonly message?: string;
   readonly createdAt?: Date;
   readonly updatedAt?: Date;
   readonly appointmentId?: string;
}


export interface IChat {
   readonly _id?: string;
   readonly doctorId?: string;
   readonly patientId?: string;
   readonly doctorProfile?: string;
   readonly patientProfile?: string;
   readonly createdAt?: Date;
   readonly updatedAt?: Date;
   readonly doctorName?: string;
   readonly patientName?: string;
   readonly notSeenMessages?: number;
}

export interface IMessage {
   readonly _id?: string;
   readonly chatId?: string;
   readonly senderId?: string;
   readonly receiverId?: string;
   readonly message?: string;
   readonly createdAt?: Date;
   readonly updatedAt?: Date;
   readonly isReceived?: boolean;
}

export default interface IVideoSection {
   _id?: string;
   appointmentId?: string;
   doctorName?: string;
   patientName?: string;
   doctorProfile?: string;
   doctorId?: string;
   patientProfile?: string;
   patientId?: string;
   createdAt?: Date;
   updatedAt?: Date;
   startTime?: Date | string;
   endTime?: Date | string;
   link?: string;
   status?: VideoSectionStatus;
}
