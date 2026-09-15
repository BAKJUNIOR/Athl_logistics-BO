import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Popup, PopupUpsertRequest } from '../../domain/entities/popup.entity';

/**
 * Endpoints réservés ADMIN — pas encore implémentés côté backend (voir le commentaire
 * dans environment.ts). Cette classe pose le contrat attendu par le BO pour que
 * l'intégration se limite à brancher le backend une fois prêt, sans retoucher le front.
 */
@Injectable({ providedIn: 'root' })
export class PopupApi {
  private readonly http = inject(HttpClient);
  private readonly base = environment.apiUrl;
  private readonly ep = environment.endpoints.popups;

  list(): Observable<Popup[]> {
    return this.http.get<Popup[]>(`${this.base}/${this.ep.list}`);
  }

  getById(id: number): Observable<Popup> {
    return this.http.get<Popup>(`${this.base}/${this.ep.byId(id)}`);
  }

  create(payload: PopupUpsertRequest): Observable<Popup> {
    return this.http.post<Popup>(`${this.base}/${this.ep.create}`, payload);
  }

  update(id: number, payload: PopupUpsertRequest): Observable<Popup> {
    return this.http.patch<Popup>(`${this.base}/${this.ep.update(id)}`, payload);
  }

  activate(id: number): Observable<Popup> {
    return this.http.post<Popup>(`${this.base}/${this.ep.activate(id)}`, {});
  }

  deactivate(id: number): Observable<Popup> {
    return this.http.post<Popup>(`${this.base}/${this.ep.deactivate(id)}`, {});
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${this.ep.byId(id)}`);
  }
}
