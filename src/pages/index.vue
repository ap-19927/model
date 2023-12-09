<script setup lang="ts">
//https://serversideup.net/post-put-and-patch-requests-with-nuxt-3/
//https://stackoverflow.com/questions/47650154/how-do-i-upload-image-in-vuejs

const url = ref(null);
const prediction = ref("");
const formData = ref(null);

const handleFileSelection = async (event) => {
  prediction.value = "";

  const file = event.target.files[0];

  url.value = URL.createObjectURL(file);

  formData.value = new FormData();
  formData.value.append("image", file);

  await useFetch("/api/upload", {
    method: "POST",
    body: formData,
  });
};

const slideToPredict = async () => {
  prediction.value = "please wait..."
  const filename = formData.value.get("image").name;
  const { data } = await useFetch(`/api/predict?name=${filename}`);
  prediction.value = data ? data._rawValue.predict : null;
};
</script>

<template>
<div>
  <h1>Attempts to identify a cat who we call Katja.</h1>
  <label>Select Image</label>
  <input type="file" @change="handleFileSelection($event)" />
  <button @click="slideToPredict"> Submit </button>
  <br>
  <pre>Prediction: {{ prediction }}</pre>
  <img :src="url"/>
</div>
</template>
