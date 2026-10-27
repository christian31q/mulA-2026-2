export function crearMetaHTML(meta, formatCurrency) {
    const progress = Math.min(100, Math.round((meta.ahorrado / meta.objetivo) * 100));
    const restante = Math.max(0, meta.objetivo - meta.ahorrado);
    const completada = restante === 0;

    return `
        <article class="goal-card goal-card--${meta.color}" aria-label="Meta: ${meta.nombre}">
            <header class="goal-card__header">
                <span class="goal-card__icon" aria-hidden="true">${meta.icono}</span>
                <h2>${meta.nombre}</h2>
            </header>
            <div class="goal-card__amounts">
                <div>
                    <span class="goal-card__label">Ahorrado</span>
                    <strong class="goal-card__saved">${formatCurrency(meta.ahorrado)}</strong>
                </div>
                <div class="goal-card__target">
                    <span class="goal-card__label">Meta</span>
                    <strong>${formatCurrency(meta.objetivo)}</strong>
                </div>
            </div>
            <div class="goal-card__progress-group">
                <div class="goal-card__track" role="progressbar" aria-label="Progreso de ${meta.nombre}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
                    <span class="goal-card__progress" style="width: ${progress}%"></span>
                </div>
                <div class="goal-card__status">
                    <span>${progress}% completado</span>
                    <span>Faltan ${formatCurrency(restante)}</span>
                </div>
            </div>
            <button class="goal-card__deposit" type="button" data-deposit-id="${meta.id}" ${completada ? "disabled" : ""}>
                ${completada ? "Meta alcanzada" : "Abonar a esta meta"}
            </button>
        </article>
    `;
}