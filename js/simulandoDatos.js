import metas from "./metas.json" with { type: "json" };
import { crearMetaHTML } from "./meta.js";

const grid = document.querySelector("#goals-grid");
const dialog = document.querySelector("#deposit-dialog");
const form = document.querySelector("#deposit-form");
const amountInput = document.querySelector("#deposit-amount");
const currency = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 });
let selectedMeta = null;

console.log("Metas cargadas:", metas);

function formatCurrency(amount) {
	return `$${currency.format(amount)}`;
}

function renderMetas() {
	grid.innerHTML = metas.map((meta) => crearMetaHTML(meta, formatCurrency)).join("")
		+ '<div class="goal-card goal-card--empty" aria-hidden="true"></div>';
}

grid.addEventListener("click", (event) => {
	const button = event.target.closest("[data-deposit-id]");
	if (!button) return;

	selectedMeta = metas.find((meta) => meta.id === button.dataset.depositId);
	document.querySelector("#deposit-title").textContent = `Abonar a ${selectedMeta.nombre}`;
	amountInput.value = "";
	dialog.showModal();
	amountInput.focus();
});

document.querySelector(".deposit-dialog__close").addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
	if (event.target === dialog) dialog.close();
});

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const amount = Number(amountInput.value);
	if (!selectedMeta || !Number.isFinite(amount) || amount <= 0) return;

	selectedMeta.ahorrado += amount;
	renderMetas();
	dialog.close();
});

renderMetas();
