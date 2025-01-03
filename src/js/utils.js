// get css variable value
function getCSSVarValue(variable) {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
}

// Custom Chart Tooltip
// Follow from https://www.chartjs.org/docs/latest/samples/tooltip/html.html

function externalTooltipHandler(context) {
    const { chart, tooltip } = context;

    let tooltipEl = document.getElementById('chart-tooltip');
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chart-tooltip';
        tooltipEl.setAttribute('role', 'tooltip');
        tooltipEl.setAttribute('container', 'body');
        tooltipEl.classList.add('popover', 'bs-popover-top', 'pb-2');
        document.body.appendChild(tooltipEl);
    }

    if (!tooltip || tooltip.opacity === 0) {
        tooltipEl.style.visibility = 'hidden';
        return;
    }

    const title = tooltip.title || [];
    const bodyLines = tooltip.body ? tooltip.body.map((body) => body.lines) : [];

    let content = `<div class="popover-arrow position-absolute top-100 start-50 translate-middle mt-1"></div>`;

    title.forEach((title) => {
        content += `<h4 class="popover-header border-0 text-center">${title}</h4>`;
    });

    bodyLines.forEach((body, i) => {
        content += `<div class="popover-body px-3 py-0 d-flex align-items-center justify-content-left">${body}</div>`;
    });

    tooltipEl.innerHTML = content;

    // Positioning
    const canvas = chart.canvas;
    const canvasRect = canvas.getBoundingClientRect();

    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

    const canvasTop = canvasRect.top + scrollTop;
    const canvasLeft = canvasRect.left + scrollLeft;

    const tooltipWidth = tooltipEl.offsetWidth;
    const tooltipHeight = tooltipEl.offsetHeight;

    const top = canvasTop - tooltipHeight + 8;
    const left = canvasLeft + tooltip.caretX - tooltipWidth / 2;

    tooltipEl.style.opacity = 1;
    tooltipEl.style.visibility = 'visible';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.top = `${top}px`;
    tooltipEl.style.left = `${left}px`;
}


function externalTooltipLabelHandler(context) {
    const dataset = context.dataset || {};
    const value = context.raw || '';
    const label = dataset.label || 'No Label';
    const indicatorColor = dataset.backgroundColor || dataset.borderColor || 'rgba(0,0,0,0.1)';
    const indicatorHHTML = `<span class="popover-body-indicator" style="background-color: ${indicatorColor};"></span>`
    const labelHtml = `<span class="popover-body-label me-auto">${label}</span>`;
    const valueHtml = `<span class="popover-body-value">${value}</span>`;
    return `${indicatorHHTML}${labelHtml}${valueHtml}`;
};

// Custom Legends
const chartLegends = document.querySelectorAll('[data-toggle="legend"]');

function toggleLegend(legend) {
    const chart = Chart.getChart(legend);
    const legendEl = document.createElement('div');

    chart.legend.legendItems?.forEach((item) => {
        const fillColor = item.fillStyle !== 'transparent' ? item.fillStyle : item.strokeStyle;
        legendEl.innerHTML += `<span class="chart-legend-item"><span class="chart-legend-indicator" style="background-color: ${fillColor}"></span>${item.text}</span>`;
    });
    const id = legend.dataset.target;
    const container = document.querySelector(id);
    container.appendChild(legendEl);
}

document.addEventListener('DOMContentLoaded', function () {
    chartLegends.forEach(function (legend) {
        console.log(legend);
        toggleLegend(legend);
    });
});
