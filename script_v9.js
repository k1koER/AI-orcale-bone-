// ==========================================
// 1. 全局設定
// ==========================================
// TODO: 每次 Colab 重啟後，請在此貼上新的 ngrok 網址 (不要有結尾的 /)
const API_BASE_URL = "https://transportive-archie-unmanaged.ngrok-free.dev"; 

// 版本: v8 - Make Oracle Bones Great Again

// ==========================================
// 2. 國際化 (i18n) 翻譯系統
// ==========================================
const translations = {
    "zh-TW": {
        "lang.zh": "中文",
        "lang.en": "EN",
        "app.title": "Make Oracle Bones Great Again",
        "app.subtitle": "從「辨識到幽默」的 AI 古文字敘事系統",
        "nav.welcome": "歡迎使用",
        "nav.recognition": "圖像辨識",
        "nav.joke": "古文字笑話",
        "nav.story": "說書人動畫",
        "welcome.title": "歡迎來到「Make Oracle Bones Great Again」",
        "welcome.intro": "這是一個結合古代智慧與現代科技的互動系統。您可以透過本系統辨識古文字、探索文字背後的趣味，甚至生成獨一無二的古文字故事影片。",
        "welcome.meaning": "「Make Oracle Bones Great Again」——我們希望透過 AI 技術，讓三千年前的古文字重新活過來，用幽默有趣的方式，帶您認識古文字的智慧與魅力。請點擊上方的功能書籤，開始您的探索之旅！",
        "recognition.title": "圖像辨識",
        "recognition.desc": "上傳古文字照片，AI將為您辨識文字。確認無誤後，可進一步生成介紹影片。",
        "recognition.lang": "解讀語言",
        "recognition.upload": "上傳古文字照片",
        "recognition.hint": "支援 .jpg, .png 格式圖片",
        "recognition.identify": "開始辨識文字",
        "recognition.loading": "正在解讀古文字...",
        "recognition.video_title": "生成介紹影片",
        "recognition.video_desc": "既然已經解讀了這個字，要不要製作一段影片來介紹它？",
        "recognition.voice": "解說語音",
        "recognition.style": "影片風格 (AI 建議)",
        "recognition.style_input": "或輸入您想要的風格...",
        "recognition.generate": "開始生成影片",
        "joke.title": "古文字笑話",
        "joke.desc": "AI將根據您輸入的古文字生成幽默小笑話，並朗讀出來。",
        "joke.char": "文字",
        "joke.char_hint": "例如：羊、日、水",
        "joke.lang": "語言",
        "joke.voice": "語音風格",
        "joke.generate": "生成笑話",
        "joke.loading": "正在構思笑話並合成語音...",
        "joke.placeholder": "AI生成的笑話與語音將顯示於此",
        "story.title": "說書人",
        "story.desc": "輸入古文字，AI 將用相聲風格講述這個字的故事。",
        "story.char": "古文字",
        "story.char_hint": "例如：羊、日、水",
        "story.lang": "語言選擇",
        "story.format": "呈現方式",
        "story.static": "📖 繪本版 (3-5分鐘)",
        "story.dynamic": "🎬 動態版 (5-10分鐘) ⭐",
        "story.player_count": "選擇人數：",
        "story.single": "單人敘述",
        "story.dual": "雙人對話",
        "story.role_a": "角色 A",
        "story.role_b": "角色 B",
        "story.generate": "生成故事",
        "story.loading": "正在生成故事...",
        "story.placeholder": "AI生成的故事將顯示於此",
        "common.lang_zh": "繁體中文",
        "common.lang_en": "English",
        "voice.standard": "標準解說 (Standard)",
        "voice.villager": "Minecraft 村民",
        "voice.trump": "川普",
        "voice.obama": "歐巴馬",
        "voice.biden": "拜登",
        "voice.taylor": "泰勒絲",
        "voice.morgan": "摩根費里曼",
        "voice.hillary": "希拉蕊",
        "style.ink": "📜 水墨歷史",
        "style.cyber": "🤖 未來科技",
        "style.ghibli": "🍃 吉卜力風",
        "style.doc": "🏛️ 紀錄片"
    },
    "en-US": {
        "lang.zh": "中文",
        "lang.en": "EN",
        "app.title": "Make Oracle Bones Great Again",
        "app.subtitle": "From Recognition to Humor: AI Ancient Script Narrative System",
        "nav.welcome": "Welcome",
        "nav.recognition": "Recognition",
        "nav.joke": "Jokes",
        "nav.story": "Storyteller",
        "welcome.title": "Welcome to Make Oracle Bones Great Again",
        "welcome.intro": "This is an interactive system combining ancient wisdom with modern technology. You can recognize ancient scripts, explore the stories behind them, and even generate unique educational videos with humor.",
        "welcome.meaning": "\"Make Oracle Bones Great Again\" — We use AI technology to bring 3,000-year-old ancient scripts back to life, helping you discover the wisdom and charm of ancient characters in a fun and engaging way. Click the tabs above to begin your journey!",
        "recognition.title": "Image Recognition",
        "recognition.desc": "Upload an ancient script photo, and AI will identify it for you. After confirmation, you can generate an introduction video.",
        "recognition.lang": "Interpretation Language",
        "recognition.upload": "Upload Ancient Script Photo",
        "recognition.hint": "Supports .jpg, .png formats",
        "recognition.identify": "Start Recognition",
        "recognition.loading": "Decoding ancient script...",
        "recognition.video_title": "Generate Introduction Video",
        "recognition.video_desc": "Now that the character is identified, would you like to create a video about it?",
        "recognition.voice": "Narration Voice",
        "recognition.style": "Video Style (AI Suggestions)",
        "recognition.style_input": "Or enter your preferred style...",
        "recognition.generate": "Generate Video",
        "joke.title": "Ancient Script Jokes",
        "joke.desc": "AI will generate humorous jokes based on the ancient character you enter and narrate them.",
        "joke.char": "Character",
        "joke.char_hint": "e.g.: 羊, 日, 水",
        "joke.lang": "Language",
        "joke.voice": "Voice Style",
        "joke.generate": "Generate Joke",
        "joke.loading": "Crafting joke and synthesizing voice...",
        "joke.placeholder": "AI-generated joke and audio will appear here",
        "story.title": "Storyteller",
        "story.desc": "Enter an ancient character, and AI will tell its story in a storybook or animated format.",
        "story.char": "Ancient Character",
        "story.char_hint": "e.g.: 羊, 日, 水",
        "story.lang": "Language",
        "story.format": "Presentation Mode",
        "story.static": "📖 Storybook (3-5 min)",
        "story.dynamic": "🎬 Animated (5-10 min) ⭐",
        "story.player_count": "Number of Speakers:",
        "story.single": "Solo Narration",
        "story.dual": "Duo Dialogue",
        "story.role_a": "Role A",
        "story.role_b": "Role B",
        "story.generate": "Generate Story",
        "story.loading": "Generating story...",
        "story.placeholder": "AI-generated story will appear here",
        "common.lang_zh": "Traditional Chinese",
        "common.lang_en": "English",
        "voice.standard": "Standard",
        "voice.villager": "Minecraft Villager",
        "voice.trump": "Trump",
        "voice.obama": "Obama",
        "voice.biden": "Biden",
        "voice.taylor": "Taylor Swift",
        "voice.morgan": "Morgan Freeman",
        "voice.hillary": "Hillary Clinton",
        "style.ink": "📜 Ink Painting",
        "style.cyber": "🤖 Cyberpunk",
        "style.ghibli": "🍃 Ghibli Style",
        "style.doc": "🏛️ Documentary"
    }
};

// 當前語言
let currentLang = localStorage.getItem('lang') || 'zh-TW';

// 保存最後辨識的字（用於自動填入）
let lastRecognizedChar = null;

// Toggle 語言開關函數
function toggleLanguage(isEnglish) {
    const lang = isEnglish ? 'en-US' : 'zh-TW';
    switchLanguage(lang);
    updateToggleLabels(lang);
}

// 更新 toggle 標籤的 active 狀態
function updateToggleLabels(lang) {
    const labels = document.querySelectorAll('.toggle-label');
    labels.forEach(label => {
        label.classList.remove('active');
    });
    
    if (lang === 'zh-TW') {
        labels[0].classList.add('active');
    } else {
        labels[1].classList.add('active');
    }
}

// 切換語言函數
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// ==========================================
// 3. API 共用函數
// ==========================================
async function fetchAPI(endpoint, options = {}, timeoutMs = 600000) {
    // 預設超時 10 分鐘 (600000ms)，說書人動態版需要較長時間
    const url = API_BASE_URL + endpoint;
    console.log('🌐 API Request:', url);
    console.log('⏱️ Timeout:', timeoutMs / 1000, 'seconds');
    
    const defaultOptions = {
        headers: {
            'ngrok-skip-browser-warning': 'true'
        }
    };
    
    const mergedOptions = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...(options.headers || {})
        }
    };
    
    // 使用 AbortController 實現超時
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    
    try {
        const response = await fetch(url, {
            ...mergedOptions,
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('請求超時，請稍後重試 / Request timeout, please try again');
        }
        throw error;
    }
}

async function checkAPIStatus() {
    const statusEl = document.getElementById('apiStatus');
    try {
        const response = await fetchAPI('/');
        const data = await response.json();
        // v12 返回 status: "running"
        if (data.status === 'ok' || data.status === 'online' || data.status === 'running') {
            statusEl.textContent = `API ${data.version || 'v?'} ✓`;
            statusEl.classList.remove('offline');
            statusEl.classList.add('online');
            return true;
        }
    } catch (error) {
        console.log('API 連接失敗:', error);
    }
    statusEl.textContent = currentLang === 'zh-TW' ? 'API 未連接' : 'API Offline';
    statusEl.classList.remove('online');
    statusEl.classList.add('offline');
    return false;
}

// ==========================================
// 4. 頁面導航
// ==========================================
function initNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// ==========================================
// 5. 圖像辨識邏輯
// ==========================================
function initRecognition() {
    const imageInput = document.getElementById('imageInput');
    const imagePreviewBox = document.getElementById('imagePreviewBox');
    const imagePreview = document.getElementById('imagePreview');
    const btnIdentifyOnly = document.getElementById('btn-identify-only');
    const recStep1 = document.getElementById('rec-step-1');
    const recStep2 = document.getElementById('rec-step-2');
    const recLoading = document.getElementById('rec-loading');
    const recResultDisplay = document.getElementById('rec-result-display');
    const btnGenVideo = document.getElementById('btn-gen-video');

    let selectedFile = null;
    let recognizedData = null;

    imageInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            selectedFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (ev) => {
                imagePreview.src = ev.target.result;
                imagePreviewBox.classList.remove('hidden');
            };
            reader.readAsDataURL(selectedFile);
            btnIdentifyOnly.disabled = false;
        }
    });

    btnIdentifyOnly.addEventListener('click', async () => {
        if (!selectedFile) return;

        btnIdentifyOnly.disabled = true;
        recResultDisplay.classList.add('hidden');
        recStep2.classList.add('hidden');
        recLoading.classList.remove('hidden');

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('lang', document.getElementById('rec-lang').value);

        try {
            const response = await fetchAPI('/recognize/', { 
                method: 'POST', 
                body: formData 
            });
            const data = await response.json();
            if (data.error) throw new Error(data.error);

            recognizedData = data;
            lastRecognizedChar = data.character;

            recResultDisplay.innerHTML = `
                <div class="result-box" style="background:#F9F9F9; padding:20px; border-radius:8px; border-left: 5px solid #4A90A4;">
                    <h3 style="margin-top:0; color:#4A90A4;">📜 ${currentLang === 'zh-TW' ? '辨識結果' : 'Recognition Result'}</h3>
                    <p style="font-size:2.5rem; margin:15px 0; color:#333;">${data.character || 'N/A'}</p>
                    <p><strong>${currentLang === 'zh-TW' ? '拼音' : 'Pinyin'}:</strong> ${data.pinyin || 'N/A'}</p>
                    <p><strong>${currentLang === 'zh-TW' ? '類型' : 'Type'}:</strong> ${data.type || 'N/A'}</p>
                    <p><strong>${currentLang === 'zh-TW' ? '含義' : 'Meaning'}:</strong> ${data.meaning || 'N/A'}</p>
                    <p><strong>${currentLang === 'zh-TW' ? '信心度' : 'Confidence'}:</strong> ${data.confidence || 'N/A'}</p>
                </div>
            `;
            recResultDisplay.classList.remove('hidden');
            recStep2.classList.remove('hidden');

        } catch (error) {
            alert((currentLang === 'zh-TW' ? "辨識失敗: " : "Recognition failed: ") + error.message);
        } finally {
            recLoading.classList.add('hidden');
            btnIdentifyOnly.disabled = false;
        }
    });

    btnGenVideo.addEventListener('click', async () => {
        if (!recognizedData) return;

        btnGenVideo.disabled = true;
        recLoading.classList.remove('hidden');
        recLoading.querySelector('p').textContent = currentLang === 'zh-TW' ? '正在生成影片...' : 'Generating video...';

        const formData = new FormData();
        formData.append('character', recognizedData.character);
        formData.append('meaning', recognizedData.meaning || '');
        formData.append('voice', document.getElementById('rec-voice').value);
        formData.append('lang', document.getElementById('rec-lang').value);
        formData.append('style_prompt', document.getElementById('videoPrompt').value);

        try {
            // 影片生成超時 5 分鐘
            const response = await fetchAPI('/generate_video/', { 
                method: 'POST', 
                body: formData 
            }, 300000);
            const data = await response.json();
            if (data.error) throw new Error(data.error);

            recResultDisplay.innerHTML += `
                <div style="margin-top:20px; background:#000; padding:15px; border-radius:8px;">
                    <video controls style="width:100%;" autoplay>
                        <source src="data:video/mp4;base64,${data.video_base64}" type="video/mp4">
                    </video>
                </div>
            `;
        } catch (error) {
            alert((currentLang === 'zh-TW' ? "影片生成失敗: " : "Video generation failed: ") + error.message);
        } finally {
            recLoading.classList.add('hidden');
            btnGenVideo.disabled = false;
        }
    });
}

// ==========================================
// 6. 古文字笑話邏輯
// ==========================================
function initJoke() {
    const btnJoke = document.getElementById('btn-joke');
    const jokeLoading = document.getElementById('joke-loading');
    const jokePlaceholder = document.getElementById('joke-placeholder');
    const jokeResultDisplay = document.getElementById('joke-result-display');

    btnJoke.addEventListener('click', async () => {
        const char = document.getElementById('joke-char').value.trim();
        const lang = document.getElementById('joke-lang').value;
        const voiceStyle = document.getElementById('joke-voice').value;

        if (!char) {
            alert(currentLang === 'zh-TW' ? "請輸入文字" : "Please enter a character");
            return;
        }

        btnJoke.disabled = true;
        jokePlaceholder.classList.add('hidden');
        jokeResultDisplay.classList.add('hidden');
        jokeLoading.classList.remove('hidden');

        const formData = new FormData();
        formData.append('character', char);
        formData.append('lang', lang);
        formData.append('voice_style', voiceStyle);

        try {
            // 笑話超時 2 分鐘
            const response = await fetchAPI('/joke/', { 
                method: 'POST', 
                body: formData 
            }, 120000);
            
            const data = await response.json();
            if (data.error) throw new Error(data.error);

            const voiceLabel = voiceStyle.toUpperCase();
            jokeResultDisplay.innerHTML = `
                <div style="background:#F9F9F9; padding:25px; border-radius:8px; border-left: 5px solid #C8B28E; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h3 style="margin-top:0; color:#555; font-size:1.2rem; display:flex; align-items:center;">
                        <span style="font-size:1.5rem; margin-right:10px;">🤡</span> 
                        ${voiceLabel} ${currentLang === 'zh-TW' ? '風格笑話' : 'Style Joke'}
                    </h3>
                    <p style="font-size:1.1rem; line-height:1.8; color:#444; margin: 15px 0;">
                        ${data.joke_text.replace(/\n/g, '<br>')}
                    </p>
                    <div style="background:#FFF; padding:10px; border-radius:30px; border:1px solid #EEE; display:flex; align-items:center;">
                        <audio controls style="width:100%; height:30px;" autoplay>
                            <source src="data:audio/mp3;base64,${data.audio_base64}" type="audio/mp3">
                        </audio>
                    </div>
                </div>
            `;
            jokeResultDisplay.classList.remove('hidden');

        } catch (error) {
            alert((currentLang === 'zh-TW' ? "生成笑話失敗: " : "Joke generation failed: ") + error.message);
            jokePlaceholder.classList.remove('hidden');
        } finally {
            jokeLoading.classList.add('hidden');
            btnJoke.disabled = false;
        }
    });
}

// ==========================================
// 7. 說書人邏輯 (修復版)
// ==========================================
function initStoryteller() {
    const btnStory = document.getElementById('btn-story');
    const storyLoading = document.getElementById('story-loading');
    const storyLoadingText = document.getElementById('story-loading-text');
    const storyPlaceholder = document.getElementById('story-placeholder');
    const storyResultArea = document.getElementById('story-result-area');
    
    let isProcessing = false;
    
    btnStory.addEventListener('click', async () => {
        if (isProcessing) {
            console.log('⚠️ 請求處理中，忽略重複點擊');
            return;
        }
        
        const char = document.getElementById('story-char').value.trim();
        const lang = document.getElementById('story-lang').value;
        const format = document.getElementById('story-format').value;  // static 或 dynamic
        const voicesMode = document.querySelector('input[name="playerCount"]:checked').value;  // single 或 dual
        const voiceA = document.getElementById('story-voice-a').value;
        const voiceB = document.getElementById('story-voice-b').value;
        
        if (!char) {
            alert(currentLang === 'zh-TW' ? '請輸入古文字' : 'Please enter an ancient character');
            return;
        }
        
        // 動態版時間警告
        if (format === 'dynamic') {
            const confirmed = confirm(currentLang === 'zh-TW' 
                ? '動態版需要 15-25 分鐘生成，確定繼續？\n\n（生成期間請勿關閉此頁面）'
                : 'Dynamic mode takes 15-25 minutes. Continue?\n\n(Please keep this page open during generation)');
            if (!confirmed) {
                return;
            }
        }
        
        // ========== DEBUG LOG ==========
        console.log('========== 說書人請求參數 ==========');
        console.log('字符:', char);
        console.log('語言:', lang);
        console.log('格式 (static/dynamic):', format);
        console.log('人數模式 (single/dual):', voicesMode);
        console.log('聲音 A:', voiceA);
        console.log('聲音 B:', voiceB);
        
        isProcessing = true;
        btnStory.disabled = true;
        storyPlaceholder.classList.add('hidden');
        storyResultArea.classList.add('hidden');
        storyLoading.classList.remove('hidden');
        storyLoadingText.textContent = currentLang === 'zh-TW' ? '正在準備...' : 'Preparing...';
        
        // 清除之前的進度條
        const oldProgress = storyLoading.querySelector('.progress-container');
        if (oldProgress) oldProgress.remove();
        
        try {
            // ========== v5 更新：繪本模式 ==========
            // 靜態版 = 繪本形式（多張圖片 + 語音）
            // 動態版 = SVD 動畫（需要更長時間）
            
            const endpoint = format === 'dynamic' ? '/storyteller_animated/' : '/storyteller/';
            const mode = voicesMode === 'dual' ? 'dialogue' : 'single';
            
            // v6: 動態版 3 段（加速），繪本版 4 段
            const requestedSegments = format === 'dynamic' ? 3 : 4;
            
            console.log('API Endpoint:', endpoint);
            console.log('API mode 參數:', mode);
            console.log('Segments:', requestedSegments);
            console.log('預估時間:', format === 'dynamic' ? '5-10 分鐘' : '3-5 分鐘');
            
            const formData = new FormData();
            formData.append('character', char);
            formData.append('meaning', char);
            formData.append('voice_a', voiceA);
            formData.append('voice_b', voiceB);
            formData.append('mode', mode);
            formData.append('lang', lang);
            formData.append('segments', requestedSegments.toString());
            
            
            // ========== v6: 使用 Streaming 讀取實時進度 ==========
            console.log('📖 模式:', format === 'dynamic' ? '動態（SVD動畫）' : '靜態（繪本形式）');
            
            // 創建進度條
            const progressContainer = document.createElement('div');
            progressContainer.className = 'progress-container';
            progressContainer.innerHTML = `
                <div style="margin-top: 15px;">
                    <div style="background: #e0e0e0; border-radius: 10px; height: 20px; overflow: hidden;">
                        <div id="story-progress-bar" style="background: linear-gradient(90deg, #4CAF50, #8BC34A); height: 100%; width: 0%; transition: width 0.3s ease;"></div>
                    </div>
                    <p id="story-progress-text" style="text-align: center; margin-top: 8px; color: #666; font-size: 0.9rem;">準備中...</p>
                </div>
            `;
            storyLoading.appendChild(progressContainer);
            
            const progressBar = document.getElementById('story-progress-bar');
            const progressText = document.getElementById('story-progress-text');
            
            const updateProgressUI = (progress, status) => {
                if (progressBar) progressBar.style.width = `${progress}%`;
                if (progressText) progressText.textContent = status;
                storyLoadingText.textContent = status;
            };
            
            // 使用 Fetch Streaming API
            const url = API_BASE_URL + endpoint;
            console.log('🌐 Streaming API Request:', url);
            
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
                headers: {
                    'ngrok-skip-browser-warning': 'true'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            // 讀取 streaming response (SSE 格式: data: {...})
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';
            let finalData = null;
            
            while (true) {
                const { done, value } = await reader.read();
                
                if (done) break;
                
                buffer += decoder.decode(value, { stream: true });
                
                // 處理 SSE 格式（每行以 "data: " 開頭）
                const lines = buffer.split('\n');
                buffer = lines.pop(); // 保留未完成的行
                
                for (const line of lines) {
                    if (!line.trim()) continue;
                    
                    // 移除 SSE 的 "data: " 前綴
                    let jsonStr = line.trim();
                    if (jsonStr.startsWith('data: ')) {
                        jsonStr = jsonStr.substring(6);
                    }
                    
                    if (!jsonStr) continue;
                    
                    try {
                        const event = JSON.parse(jsonStr);
                        console.log('📨 進度事件:', event);
                        
                        // v12 後端格式：{ progress, message_zh, message_en, ... }
                        if (event.progress !== undefined) {
                            const status = currentLang === 'zh-TW' 
                                ? (event.message_zh || event.status || `進度 ${event.progress}%`)
                                : (event.message_en || event.status_en || `Progress ${event.progress}%`);
                            updateProgressUI(event.progress, status);
                            
                            // 檢查是否完成（progress=100 且有 video_base64）
                            if (event.progress === 100 && event.video_base64) {
                                finalData = event;
                            }
                        }
                        
                        // 處理錯誤
                        if (event.error) {
                            throw new Error(event.error);
                        }
                    } catch (parseError) {
                        if (parseError.message && !parseError.message.includes('JSON')) {
                            throw parseError; // 重新拋出非 JSON 解析錯誤
                        }
                        console.warn('JSON 解析警告:', parseError, 'Line:', jsonStr);
                    }
                }
            }
            
            // 處理剩餘的 buffer
            if (buffer.trim()) {
                let jsonStr = buffer.trim();
                if (jsonStr.startsWith('data: ')) {
                    jsonStr = jsonStr.substring(6);
                }
                try {
                    const event = JSON.parse(jsonStr);
                    if (event.progress === 100 && event.video_base64) {
                        finalData = event;
                    }
                    if (event.error) {
                        throw new Error(event.error);
                    }
                } catch (e) {
                    console.warn('最後 buffer 解析警告:', e);
                }
            }
            
            if (!finalData) {
                throw new Error('未收到完成訊號');
            }
            
            const data = finalData;
            console.log('API 完成:', data);
            
            // 顯示結果
            const modeText = currentLang === 'zh-TW' 
                ? (format === 'dynamic' ? '🎬 動態影片' : '📖 繪本故事')
                : (format === 'dynamic' ? '🎬 Dynamic Video' : '📖 Storybook');
            const voiceText = currentLang === 'zh-TW'
                ? (voicesMode === 'dual' ? '雙人對話' : '單人敘述')
                : (voicesMode === 'dual' ? 'Duo Dialogue' : 'Solo Narration');
            
            // 顯示對話腳本 - 優先使用 scripts 陣列
            let scriptsHtml = '';
            const scriptSegments = Array.isArray(data.scripts) ? data.scripts : [];
            console.log('📜 腳本資料:', scriptSegments);
            
            if (scriptSegments.length > 0) {
                scriptsHtml = `
                    <div style="margin-top:20px; padding:20px; background:linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius:12px; max-height:300px; overflow-y:auto; border-left: 4px solid #4A90A4;">
                        <h4 style="margin:0 0 15px 0; color:#4A90A4; font-size:1.1rem;">
                            📜 ${currentLang === 'zh-TW' ? '對話腳本' : 'Dialogue Script'}
                        </h4>
                        ${scriptSegments.map((s, i) => {
                            const speaker = s.speaker || (i % 2 === 0 ? 'A' : 'B');
                            const script = s.script || s;
                            const isA = speaker === 'A' || speaker === 'narrator';
                            const bgColor = isA ? '#fff3e0' : '#e3f2fd';
                            const borderColor = isA ? '#ff9800' : '#2196f3';
                            const labelColor = isA ? '#e65100' : '#1565c0';
                            return `
                                <div style="margin:10px 0; padding:12px 15px; background:${bgColor}; border-radius:8px; border-left:3px solid ${borderColor};">
                                    <span style="font-weight:bold; color:${labelColor}; font-size:0.85rem;">
                                        [${speaker === 'narrator' ? (currentLang === 'zh-TW' ? '旁白' : 'Narrator') : speaker}]
                                    </span>
                                    <p style="margin:8px 0 0 0; color:#333; line-height:1.6; font-size:0.95rem;">
                                        ${script}
                                    </p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;
            }
            
            const finalSegmentCount = scriptSegments.length || (typeof data.segments === 'number' ? data.segments : requestedSegments);
            
            storyResultArea.innerHTML = `
                <div style="background:#F9F9F9; padding:25px; border-radius:8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h3 style="margin-top:0; color:#555; font-size:1.2rem; display:flex; align-items:center;">
                        <span style="font-size:1.5rem; margin-right:10px;">${format === 'dynamic' ? '🎬' : '📖'}</span> 
                        ${char} ${currentLang === 'zh-TW' ? '的故事' : 'Story'} (${modeText} · ${voiceText})
                    </h3>
                    <div style="background:#000; border-radius:8px; overflow:hidden; margin-top:15px;">
                        <video controls style="width:100%; display:block;" autoplay>
                            <source src="data:video/mp4;base64,${data.video_base64}" type="video/mp4">
                        </video>
                    </div>
                    ${scriptsHtml}
                    <p style="margin-top:15px; color:#888; font-size:0.9rem; text-align:center;">
                        ${format === 'dynamic' 
                            ? (currentLang === 'zh-TW' ? `✨ 動態影片已生成 (${finalSegmentCount} 段動畫)` : `✨ Dynamic video (${finalSegmentCount} animated segments)`)
                            : (currentLang === 'zh-TW' ? `📖 繪本故事已生成 (${finalSegmentCount} 頁)` : `📖 Storybook generated (${finalSegmentCount} pages)`)
                        }
                    </p>
                </div>
            `;
            storyResultArea.classList.remove('hidden');
            
        } catch (error) {
            console.error('說書人錯誤:', error);
            let errorMsg = error.message;
            
            // 更友好的錯誤訊息
            if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                errorMsg = currentLang === 'zh-TW'
                    ? '網路連線中斷，請確保網路穩定後重試。'
                    : 'Network disconnected. Please ensure stable connection.';
            }
            
            alert((currentLang === 'zh-TW' ? "生成故事失敗: " : "Story generation failed: ") + errorMsg);
            storyPlaceholder.classList.remove('hidden');
        } finally {
            storyLoading.classList.add('hidden');
            btnStory.disabled = false;
            isProcessing = false;
        }
    });
}

// 切換角色 B 的顯示
function toggleStoryVoice() {
    const mode = document.querySelector('input[name="playerCount"]:checked').value;
    const voiceBGroup = document.getElementById('voice-b-group');
    
    if (mode === 'dual') {
        voiceBGroup.classList.remove('hidden');
    } else {
        voiceBGroup.classList.add('hidden');
    }
}

// 設置影片風格 prompt
function setPrompt(text) {
    document.getElementById('videoPrompt').value = text;
}

// ==========================================
// 8. 初始化
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 初始化語言
    const toggle = document.getElementById('language-toggle');
    if (currentLang === 'en-US') {
        toggle.checked = true;
    }
    switchLanguage(currentLang);
    updateToggleLabels(currentLang);
    
    // 初始化各模組
    initNavigation();
    initRecognition();
    initJoke();
    initStoryteller();
    
    // 檢查 API 狀態
    checkAPIStatus();
    setInterval(checkAPIStatus, 30000);
    
    console.log('🎉 Make Oracle Bones Great Again v8 已載入');
    console.log('📡 API:', API_BASE_URL);
});
