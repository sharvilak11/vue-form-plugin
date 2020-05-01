// Declare install function executed by Vue.use()
import FieldFor from './lib/FieldFor.vue';
import FormFor from './lib/FormFor.vue';

export function install(Vue, options = { formFor: true}) {
    if (install.installed) return;
    install.installed = true;
    Vue.component(FieldFor.name, FieldFor);
    if (options.formFor) {
        Vue.component(FormFor.name, FormFor);
    }
}

export { FieldFor, FormFor };

const plugin = {
    install
};

export default plugin;
