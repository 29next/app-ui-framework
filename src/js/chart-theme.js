const fonts = {
    base: getCSSVarValue('--bs-font-sans-serif'),
    size: 13,
    weight: 400
};

const colors = {
    gray: {
        600: getCSSVarValue('--bs-gray-600'),
    },
    primary: getCSSVarValue('--bs-primary'),
    black: getCSSVarValue('--bs-dark'),
    white: getCSSVarValue('--bs-white'),
    transparent: 'transparent',
};

Chart.defaults.responsive = true;
Chart.defaults.maintainAspectRatio = false;
Chart.defaults.font.family = fonts.base;
Chart.defaults.color = colors.gray[600];
Chart.defaults.font.size = fonts.size;
Chart.defaults.font.weight = fonts.weight;
Chart.defaults.layout.padding = 10;

Chart.defaults.plugins.legend.display = false;

Chart.defaults.elements.point.radius = 0;
Chart.defaults.elements.point.backgroundColor = colors.primary;

Chart.defaults.elements.line.tension = 0.1;
Chart.defaults.elements.line.borderWidth = 2.5;
Chart.defaults.elements.line.borderColor = colors.primary;
Chart.defaults.elements.line.backgroundColor = colors.transparent;
Chart.defaults.elements.line.borderCapStyle = 'rounded';
Chart.defaults.elements.bar.backgroundColor = colors.primary;
Chart.defaults.elements.bar.borderWidth = 0;
Chart.defaults.elements.bar.borderRadius = 0;
Chart.defaults.elements.bar.borderSkipped = false;
Chart.defaults.datasets.bar.maxBarThickness = 30;

// yAxis
Chart.defaults.scales.linear.border = {
    display: false,
}
Chart.defaults.scales.linear.grid = {
    drawBorder: false,
    display: false,
    drawTics: false,
};
Chart.defaults.scales.linear.ticks = {
    display: false,
}

// xAxis
Chart.defaults.scales.category.grid = {
    drawBorder: false,
    drawOnChartArea: false,
    drawTicks: false,
    display: false,
};
Chart.defaults.scales.category.border = {
    display: false,
}

Chart.defaults.scales.category.ticks.padding = 20;
Chart.defaults.scales.category.ticks.autoSkipPadding = 20;

// Tooltips
Chart.defaults.plugins.tooltip.enabled = false;
Chart.defaults.plugins.tooltip.mode = 'index';
Chart.defaults.plugins.tooltip.intersect = false;
Chart.defaults.plugins.tooltip.external = externalTooltipHandler;
Chart.defaults.plugins.tooltip.callbacks.label = externalTooltipLabelHandler;
