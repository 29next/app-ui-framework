---
layout: page-content
group: components
order: 5
title: "Forms"
description: 29next supports all of Bootstrap's default form styling. Please read the <a href="https://getbootstrap.com/docs/5.2/forms/overview/" target="_blank">official documentation</a> for a full list of options from Bootstrap's core library.
---

<div class=" mb-5">
  <div class="card">
    <div class="card-body">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
      <div class="mb-3">
        <label class="form-label" for="exampleSelect">
          Standard Select
        </label>
        <select id="exampleSelect" class="form-select mb-3" aria-label="Default select example">
          <option selected>Choose Your Choice</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label" for="exampleSelect">
          Choices Select
        </label>
        <select id="exampleSelect" class="form-select mb-3" data-choices aria-label="Default select example">
          <option selected>Choose Your Choice</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label" for="exampleSelect">
          Choices Multi-Select
        </label>
        <select id="multiSelect" class="form-select mb-3" data-choices='{"removeItemButton":true}' multiple aria-label="Default select example">
            <option value="London" selected>London</option>
            <option value="Manchester">Manchester</option>
            <option value="Liverpool">Liverpool</option>
            <option value="New York">New York</option>
            <option value="Washington" disabled="">Washington</option>
            <option value="Michigan">Michigan</option>
        </select>
      </div>
       <div class="mb-3">
        <label class="form-label" for="exampleSelect">
          Multi-Select with Grouped Choices
        </label>
        <select id="optionGroups" class="form-select mb-3" data-choices='{"removeItemButton":true}' multiple aria-label="Default select example">
          <optgroup label="United Kingdom">
            <option value="London">London</option>
            <option value="Manchester">Manchester</option>
            <option value="Liverpool">Liverpool</option>
          </optgroup>
          <optgroup label="France">
            <option value="Paris" selected>Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="Marseille">Marseille</option>
          </optgroup>
          <optgroup label="Germany" disabled="">
            <option value="Hamburg">Hamburg</option>
            <option value="Munich">Munich</option>
            <option value="Berlin">Berlin</option>
          </optgroup>
          <optgroup label="United States of America">
            <option value="New York">New York</option>
            <option value="Washington" disabled="">Washington</option>
            <option value="Michigan">Michigan</option>
          </optgroup>
          <optgroup label="Spain">
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Malaga">Malaga</option>
          </optgroup>
          <optgroup label="Canada">
            <option value="Montreal">Montreal</option>
            <option value="Toronto">Toronto</option>
            <option value="Vancouver">Vancouver</option>
          </optgroup>
        </select>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input class="form-control" type="file" id="formFile">
      </div>
      <div class="mb-3">
        <label for="validationServer01" class="form-label">Valid Example</label>
        <input type="text" class="form-control is-valid" id="validationServer01" value="Valid" required>
        <div class="valid-feedback">
          Is Valid Message!
        </div>
      </div>
      <div class="mb-3">
        <label for="validationServer03" class="form-label">Invalid Example</label>
        <input type="text" class="form-control is-invalid" id="validationServer03" value="Invalid"  aria-describedby="validationServer03Feedback" required>
        <div id="validationServer03Feedback" class="invalid-feedback">
          Is Invalid Message.
        </div>
      </div>
    </div>
  </div>
</div>


<div class="card">

<div class="card-body" markdown="1">

```html
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-check mb-3">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      Default checkbox
    </label>
  </div>
  <div class="form-check mb-3">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
    <label class="form-check-label" for="flexCheckChecked">
      Checked checkbox
    </label>
  </div>
  <div class="form-check mb-3">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
      Default radio
    </label>
  </div>
  <div class="form-check mb-3">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
      Default checked radio
    </label>
  </div>
  <div class="mb-3">
    <label class="form-label" for="exampleSelect">
      Select
    </label>
    <select id="exampleSelect" class="form-select mb-3" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="formFile" class="form-label">Default file input example</label>
    <input class="form-control" type="file" id="formFile">
  </div>
  <div class="mb-3">
    <label for="validationServer01" class="form-label">Valid Example</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Valid" required>
    <div class="valid-feedback">
      Is Valid Message!
    </div>
  </div>
  <div class="mb-3">
    <label for="validationServer03" class="form-label">Invalid Example</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" value="Invalid"  aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Is Invalid Message.
    </div>
  </div>
```

</div>
</div>
