import Vue from 'vue';
import JLLogin from '../components/JLLogin.vue'
export default (_this, component, title, message, confirmButtonText, cancelButtonText) => {
    const h = _this.$createElement;
    _this.$msgbox({
        title: title,
        message: h(JLLogin, null, null),
        showCancelButton: true,
        confirmButtonText: confirmButtonText || '确定',
        cancelButtonText: cancelButtonText || '取消',
        beforeClose: (action, instance, done) => {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            if (action === 'confirm') {
                JLLogin.methods.confirmButton(component.data, () => {
                    done()
                });
            } else {
                done();
            }
        }
    });
}