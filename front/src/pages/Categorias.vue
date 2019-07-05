<template>
<div class="categoria">

<h1>Categorias</h1>
{{baseURL}}

   <b-table hover striped :items="categorias" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>


</div>
</template>
<script>
import axios from 'axios';
const baseURL = 'http://localhost:3000';
import { BaseTable } from "@/components";

export default {
        name: 'Categoria',
        data: function() {
            return {
                mode: 'save',
                baseURL: 'http://localhost:3000',
                errors: [],
                categoria:{},
                categorias: [],
                fields: [
                // { key: 'id', label: 'Código', sortable: true },
                { key: 'descricao', label: 'Descricao', sortable: true },
                { key: 'depreciacaoTxAnual', label: 'TxAnual', sortable: true },
                { key: 'vidaUtil', label: 'Vida Util', sortable: true },
                { key: 'actions', label: 'Ações' }
                ]
            }
        },
        methods: {
            loadCategorias(){
                const url = `${baseURL}/categorias`
                axios.get(url).then(res => {
                    this.categorias = res.data
                     console.log(categorias)
                })
                .catch(e => {
                    this.errors.push(e)
                })
            },

            loadCategorias(categoria, mode = 'save'){
                axios.get(`${baseURL}/categorias/${categoria.id}`)
                .then(res => this.categoria = res.data)
            },

            save() {
                const method = this.categoria.id ? 'put' : 'post'
                const id = this.categoria.id ? `/${this.categoria.id}` : ''
                axios[method](`${baseURL}/categorias${id}`, this.categoria)
                .then(() => {
                    this.$toasted.global.defaultSave()
                    this.reset()
                })
                .catch()
            },
            reset() {
                this.mode = 'save'
                this.categoria = {}
                this.loadCategorias()
            },
            remove() {
                const id = this.categoria.id
                axios.delete(`${baseURL}/categorias/${id}`)
                .then(() => {
                    this.$toasted.global.defaultDel()
                    this.reset()
                })
                .catch()
            }
        },
            watch: {
                page() {
                    this.loadCategorias()
                }
            },
            mounted() {
                this.loadCategorias()
            }
        }
</script>
<style>
</style>
