import { IFilm } from "../../shared/services/types";

export interface IFilmStore {
	films: Record<string, IFilm>;
	_addFilmById(filmId: string, details: IFilm): void;
	getFilmById(filmId: string): void;
	getFilmsByCharacterId(cid: string): void;
}
