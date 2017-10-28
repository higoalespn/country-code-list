export default class CodeList {
  constructor (params) {
    this.codes = params.codes
    this.container = params.container

    this.drawList()
  }

  drawList () {
    let {codes, container} = this

    let template = `
      <ul class="code-list">
        ${Object.entries(codes).map(([key, itemList]) => `
          <li class="code-group" data-key="${key}">
            <ul class="code-group-list">
              ${itemList.map(item => `
                <li class="code-item" data-code="${item.code}">
                  <p class="code-item-short">${item.short}</p>
                  <p class="code-item-area">${item.area}</p>
                </li>
              `).join('')}
            </ul>
          </li>
        `).join('')}
      </ul>
    `

    container.innerHTML = template

    return 0
  }
}
