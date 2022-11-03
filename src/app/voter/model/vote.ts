export class Vote {
    id?: number;
    season: string;
    votingTime?: number;
    comment?: string;

    constructor(id: number, season: string, votingTime: number, comment: string) {
        this.season = season;
        this.id = id;
        this.votingTime = votingTime;
        this.comment = comment;
    }

}
