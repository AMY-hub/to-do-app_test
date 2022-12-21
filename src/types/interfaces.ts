export interface TimePeriod {
    period: [number, number];
    topic: string;
    events: DateEvent[];
}

export interface DateEvent {
    date: number;
    event: string;
}