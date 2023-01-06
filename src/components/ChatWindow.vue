<template>
  <div class="chat-window">
    <div v-if="error">
      {{ error }}
    </div>
    <div ref="messages" class="messages" v-if="documents">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">
          {{ doc.createdAt }}
        </span>
        <span class="name">
          {{ doc.user }}
        </span>
        <span class="message">
          {{ doc.message }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUpdated } from 'vue';
import getCollection from '~/composables/getCollection';
import { formatDistanceToNow } from 'date-fns';

const { documents, error } = getCollection('messages');

const formattedDocuments = computed(() => {
  if(documents.value) {
    return documents.value.map((doc) => {
      let time = formatDistanceToNow(doc.createdAt.toDate());
      return {
        ...doc, createdAt: time
      }
    })
  }
});

const messages = ref(null);

onUpdated(() => {
  messages.value.scrollTop = messages.value.scrollHeight;
});

</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>