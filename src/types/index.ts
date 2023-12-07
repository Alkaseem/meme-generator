export interface MemeState {
    imageUrl: string;
    topText: string;
    bottomText: string;
    textColor: string;
    rotate: number;
    scale: number;
    mirror: boolean;
}

export interface InputState {
    label: string;
    type: string;
    value: string | number;
    key: string;
}