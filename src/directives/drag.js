// 拖拉指令
export default function (app) {
  // 记录被拖拉节点
  let draggedElement = null
  app.directive('drag', {
    mounted(el, bindings) {
      const { value } = bindings

      if (bindings.modifiers.on) {
        // 拖拉的节点上触发该事件
        el.addEventListener('dragstart', (e) => {
          draggedElement = e.target
          // el.className += ' hold'
          el.className += value.dragstart
          setTimeout(() => (el.className = 'invisible'), 0)
        })

        // 拖拉结束时（释放鼠标键或按下 ESC 键）在被拖拉的节点上触发该事件
        el.addEventListener('dragend', () => {
          // el.className = 'fill'
          el.className = value.dragend
        })
      } else {
        // 拖拉元素进入当前节点触发事件
        el.addEventListener('dragenter', (e) => {
          e.preventDefault()
          // el.className += ' hovered'
          el.className += value.dragenter
        })

        // 拖拉操作离开当前节点范围时，在当前节点上触发
        el.addEventListener('dragleave', () => {
          // el.className = 'empty'
          el.className = value.dragleave
        })
        // 拖拉到当前节点上方时，在当前节点上持续触发（相隔几百毫秒）
        el.addEventListener('dragover', (e) => {
          e.preventDefault()
        })

        // 被拖拉的节点或选中的文本，释放到目标节点时，在目标节点上触发
        el.addEventListener('drop', () => {
          // el.className = 'empty'
          el.className = value.drop
          el.append(draggedElement)
        })
      }
    }
  })
}
