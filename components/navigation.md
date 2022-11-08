---
layout: page-content
group: components
order: 6
title: "Navigation"
description: 29next's in app navigation follows the boostrap tabbed navigation. Please read the <a href="https://getbootstrap.com/docs/5.2/components/navs-tabs/" target="_blank">official documentation</a> for a full list of options from Bootstrap's core library.

---

<div class=" mb-5">
  <div class="card">
    <div class="card-body">
      <ul class="nav nav-tabs nav-nxt-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
      </ul>
    </div>
  </div>
</div>
<div class=" mb-5">
<div class="card bg-light">
<div class="card-body" markdown="1">

```html
  <ul class="nav nav-tabs nav-nxt-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
  </ul>
```

</div>
</div>
</div>
## Example with Javascript Behaviour
<div class=" mb-5">
  <div class="card">
    <div class="card-body">
      <ul class="nav nav-tabs nav-nxt-tabs">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="link1-tab" data-bs-toggle="tab" data-bs-target="#link1-tab-pane" type="button" role="tab" aria-controls="link1-tab-pane" aria-selected="true">Link 1</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="link2-tab" data-bs-toggle="tab" data-bs-target="#link2-tab-pane" type="button" role="tab" aria-controls="link2-tab-pane" aria-selected="false">Link 2</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="link3-tab" data-bs-toggle="tab" data-bs-target="#link3-tab-pane" type="button" role="tab" aria-controls="link3-tab-pane" aria-selected="false">Link 3</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="link4-tab" data-bs-toggle="tab" data-bs-target="#link4-tab-pane" type="button" role="tab" aria-controls="link4-tab-pane" aria-selected="false" disabled>Link 4 Disabled</button>
          </li>
        </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="link1-tab-pane" role="tabpanel" aria-labelledby="link1-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="link2-tab-pane" role="tabpanel" aria-labelledby="link2-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="link3-tab-pane" role="tabpanel" aria-labelledby="link3-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="link4-tab-pane" role="tabpanel" aria-labelledby="link4-tab" tabindex="0">...</div>
      </div>
    </div>
  </div>
</div>
<div class=" mb-5">
<div class="card bg-light">
<div class="card-body" markdown="1">

```html
  <ul class="nav nav-tabs nav-nxt-tabs">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="link1-tab" data-bs-toggle="tab" data-bs-target="#link1-tab-pane" type="button" role="tab" aria-controls="link1-tab-pane" aria-selected="true">Link 1</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="link2-tab" data-bs-toggle="tab" data-bs-target="#link2-tab-pane" type="button" role="tab" aria-controls="link2-tab-pane" aria-selected="false">Link 2</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="link3-tab" data-bs-toggle="tab" data-bs-target="#link3-tab-pane" type="button" role="tab" aria-controls="link3-tab-pane" aria-selected="false">Link 3</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="link4-tab" data-bs-toggle="tab" data-bs-target="#link4-tab-pane" type="button" role="tab" aria-controls="link4-tab-pane" aria-selected="false" disabled>Link 4 Disabled</button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="link1-tab-pane" role="tabpanel" aria-labelledby="link1-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="link2-tab-pane" role="tabpanel" aria-labelledby="link2-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="link3-tab-pane" role="tabpanel" aria-labelledby="link3-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="link4-tab-pane" role="tabpanel" aria-labelledby="link4-tab" tabindex="0">...</div>
  </div>
```

</div>
</div>
</div>
