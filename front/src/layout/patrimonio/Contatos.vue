  <template>
    <main-layout>
        <h1>Contato</h1>
        <b-form>
            <input id="contato-id" type="hidden" v-model="contato.id" />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="contato-name">
                        <b-form-input id="contato-name" type="text"
                        v-model="contato.nome" required
                        :readonly="mode === 'remove'"
                        placeholder="" />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="E-mail:" label-for="contato-email">
                        <b-form-input id="contato-email" type="text"
                        v-model="contato.email" required
                        :readonly="mode === 'remove'"
                        placeholder="" />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Telefone:" label-for="contato-telefone">
                        <b-form-input id="contato-telefone" type="text"
                        v-model="contato.telefone" required
                        :readonly="mode === 'remove'"
                        placeholder="" />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Endereco:" label-for="endereco">
                        <b-form-input id="endereco" type="text"
                        v-model="contato.endereco" required
                        :readonly="mode === 'remove'"
                        placeholder="" />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Bairro:" label-for="bairro">
                        <b-form-input id="bairro" type="text"
                        v-model="contato.bairro" required
                        :readonly="mode === 'remove'"
                        placeholder="" />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Cidade:" label-for="cidade">
                        <b-form-input id="cidade" type="text"
                        v-model="contato.cidade" required
                        :readonly="mode === 'remove'"
                        placeholder="" />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col xs="12">
                    <b-button variant="primary" @click="save">Salvar</b-button>
                    <b-button variant="danger" @click="remove">Excluir</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
        <hr>

        <h1>Lista de Contatos</h1>
        <b-table striped hover :items="contatos" :fields="fields">
        <template slot="actions" slot-scope="data">
            <b-button variant="warning" @click="loadContato(data.item)" class="mr-2">Editar
                <i class="fa fa-pencil"></i>
            </b-button>
            <b-button variant="danger" @click="loadContato(data.item, 'remove')">Remover
                <i class="fa fa-trash"></i>
            </b-button>
        </template>
    </b-table>
    </main-layout>
</template>

<script>
    import axios from 'axios';
    import '../config/global.js'
    import MainLayout from '../layouts/Main.vue'
    const baseURL = 'http://localhost:3001'
    export default {
        name: 'Contato',
        components: { MainLayout },
        data: function() {
            return {
                mode: 'save',
                contatos: [],
                contato:{},
                errors: [],
                fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'nome', label: 'Nome', sortable: true },
                { key: 'email', label: 'E-mail', sortable: true },
                { key: 'telefone', label: 'Telefone', sortable: true },
                { key: 'actions', label: 'Ações' }
                ]
            }
        },
        methods: {
            loadContatos(){
                const url = `${baseURL}/contato`
                axios.get(url).then(res => {
                    this.contatos = res.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
            },

            loadContato(contato, mode = 'save'){
                axios.get(`${baseURL}/contato/${contato.id}`)
                .then(res => this.contato = res.data)
            },

            save() {
                const method = this.contato.id ? 'put' : 'post'
                const id = this.contato.id ? `/${this.contato.id}` : ''
                axios[method](`${baseURL}/contato${id}`, this.contato)
                .then(() => {
                    this.$toasted.global.defaultSave()
                    this.reset()
                })
                .catch()
            },
            reset() {
                this.mode = 'save'
                this.contato = {}
                this.loadContatos()
            },
            remove() {
                const id = this.contato.id
                axios.delete(`${baseURL}/contato/${id}`)
                .then(() => {
                    this.$toasted.global.defaultDel()
                    this.reset()
                })
                .catch()
            }
        },
            watch: {
                page() {
                    this.loadContatos()
                }
            },
            mounted() {
                this.loadContatos()
            }
        }
</script>
