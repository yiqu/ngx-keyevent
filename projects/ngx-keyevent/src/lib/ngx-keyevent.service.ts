import { HostListener, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable, shareReplay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxKeyeventService {

  private renderer: Renderer2;
  private keyevents$: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();
  private keyeventObs$ = this.keyevents$.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.renderer.listen('document', 'keyup', (event: KeyboardEvent) => {
      this.keyevents$.next(event);
    })
  }

  public keyEventChanges(): Observable<KeyboardEvent> {
    return this.keyeventObs$;
  }
}
