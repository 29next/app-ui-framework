---
layout: page-content
group: components
order: 3
title: "Date Picker"
description: flatpickr.js is an excellent full featured date picker library that comes bundled and styled to work natively. See <a target="_blank" href="https://flatpickr.js.org/examples/">flatpickr.js docs</a> for additional options to when initializing.
---

<div class=" mb-5">
  <div class="card">
  <div class="card-header">
    <h4 class="card-header-title">Date Picker</h4>
  </div>
    <div class="card-body">
    <p>Initialize a date picker using <code>data-datepicker</code> property on your form input.</p>
    <p>Customize the date picker options by passing valid JSON, such as <code>data-datepicker='{"mode": "range"}'</code>.</p>
        <div class="my-3">
            <label class="form-label">Date Picker Example</label>
            <input class="form-control" data-datepicker  placeholder="Example Date Picker" />
        </div>
        <div class="my-3">
             <label class="form-label">Range Picker Example</label>
            <input class="form-control" data-datepicker='{"mode": "range"}' placeholder="Example Date Range Picker" />
        </div>
    </div>
  </div>
</div>


<div class="card">

<div class="card-body" markdown="1">

```html

<div class="my-3">
    <label class="form-label">Date Picker Example</label>
    <input class="form-control" data-datepicker  placeholder="Example Date Picker" />
</div>
<div class="my-3">
    <label class="form-label">Range Picker Example</label>
    <input class="form-control" data-datepicker='{"mode": "range"}' placeholder="Example Date Range Picker" />
</div>
```
</div>
</div>
