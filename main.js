// Career Coaching Website - Main JavaScript
// Interactive functionality and animations

// Global variables
let currentQuestion = 0;
let assessmentAnswers = [];
let isAssessmentActive = false;

// Assessment questions data
const assessmentQuestions = [
    {
        id: 1,
        question: "What's your biggest career challenge right now?",
        options: [
            { text: "Building influence and visibility in my organization", value: "influence" },
            { text: "Preparing for a promotion or career transition", value: "promotion" },
            { text: "Developing executive presence and leadership skills", value: "leadership" },
            { text: "Expanding my professional network strategically", value: "networking" }
        ]
    },
    {
        id: 2,
        question: "How would you rate your current networking skills?",
        options: [
            { text: "Excellent - I have a strong professional network", value: "excellent" },
            { text: "Good - I maintain professional relationships well", value: "good" },
            { text: "Fair - I need to be more strategic about networking", value: "fair" },
            { text: "Poor - I struggle with building professional relationships", value: "poor" }
        ]
    },
    {
        id: 3,
        question: "What's your target role or career goal?",
        options: [
            { text: "C-suite executive (CEO, CFO, CMO, etc.)", value: "c-suite" },
            { text: "Senior leadership (VP, Director level)", value: "senior-leadership" },
            { text: "Management position with team leadership", value: "management" },
            { text: "Individual contributor with more impact", value: "individual" }
        ]
    },
    {
        id: 4,
        question: "How confident are you in your executive presence?",
        options: [
            { text: "Very confident - I command attention and respect", value: "very-confident" },
            { text: "Somewhat confident - I have presence but want to improve", value: "somewhat-confident" },
            { text: "Not very confident - I need to develop stronger presence", value: "not-confident" },
            { text: "Uncertain - I'm not sure what executive presence means", value: "uncertain" }
        ]
    },
    {
        id: 5,
        question: "What's your experience with board-level responsibilities?",
        options: [
            { text: "I currently serve on one or more boards", value: "current-board" },
            { text: "I have board experience and want more opportunities", value: "experienced" },
            { text: "I'm interested in board service but haven't started", value: "interested" },
            { text: "I haven't considered board service yet", value: "not-considered" }
        ]
    },
    {
        id: 6,
        question: "How strategic are you about career advancement?",
        options: [
            { text: "Very strategic - I have a clear 5-year plan", value: "very-strategic" },
            { text: "Somewhat strategic - I have general goals", value: "somewhat-strategic" },
            { text: "Reactive - I respond to opportunities as they come", value: "reactive" },
            { text: "Uncertain - I don't know how to plan strategically", value: "uncertain" }
        ]
    },
    {
        id: 7,
        question: "What's your biggest strength in professional settings?",
        options: [
            { text: "Strategic thinking and problem-solving", value: "strategic-thinking" },
            { text: "Building relationships and influencing others", value: "relationship-building" },
            { text: "Leading teams and driving results", value: "team-leadership" },
            { text: "Communication and presentation skills", value: "communication" }
        ]
    },
    {
        id: 8,
        question: "How ready are you to invest in your career development?",
        options: [
            { text: "Very ready - I'm committed to significant investment", value: "very-ready" },
            { text: "Ready - I can invest time and resources", value: "ready" },
            { text: "Somewhat ready - I need to see the ROI first", value: "somewhat-ready" },
            { text: "Not ready - I'm just exploring options", value: "not-ready" }
        ]
    }
];

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeScrollEffects();
    initializeTestimonialSlider();
    initializeSuccessChart();
    initializeNavigation();
});

// Initialize animations
function initializeAnimations() {
    // Typewriter effect for hero section
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Proven Strategies', 'Expert Guidance', 'Strategic Influence'],
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Animate elements on page load
    anime({
        targets: '.card-hover',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 800,
        easing: 'easeOutQuart'
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Initialize testimonial slider
function initializeTestimonialSlider() {
    if (document.getElementById('testimonial-slider')) {
        new Splide('#testimonial-slider', {
            type: 'loop',
            perPage: 1,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: false,
            pagination: true,
            breakpoints: {
                768: {
                    perPage: 1,
                }
            }
        }).mount();
    }
}

// Initialize success metrics chart
function initializeSuccessChart() {
    if (document.getElementById('success-chart')) {
        const chart = echarts.init(document.getElementById('success-chart'));
        
        const option = {
            title: {
                text: 'Client Success Metrics',
                left: 'center',
                textStyle: {
                    color: '#2d3748',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c}%'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                textStyle: {
                    color: '#718096'
                }
            },
            series: [
                {
                    name: 'Success Rate',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { 
                            value: 85, 
                            name: 'Promotion Success',
                            itemStyle: { color: '#8fa68e' }
                        },
                        { 
                            value: 78, 
                            name: 'Network Expansion',
                            itemStyle: { color: '#c6a96b' }
                        },
                        { 
                            value: 92, 
                            name: 'Skill Development',
                            itemStyle: { color: '#718096' }
                        },
                        { 
                            value: 88, 
                            name: 'Confidence Building',
                            itemStyle: { color: '#1a2332' }
                        }
                    ]
                }
            ]
        };
        
        chart.setOption(option);
        
        // Make chart responsive
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }
}

// Initialize navigation
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('nav-sticky');
        } else {
            navbar.classList.remove('nav-sticky');
        }
    });
}

// Career Assessment Functions
function startAssessment() {
    isAssessmentActive = true;
    currentQuestion = 0;
    assessmentAnswers = [];
    
    const intro = document.getElementById('assessment-intro');
    const progress = document.getElementById('assessment-progress');
    const questions = document.getElementById('assessment-questions');
    
    intro.classList.add('hidden');
    progress.classList.remove('hidden');
    questions.classList.remove('hidden');
    
    showQuestion(currentQuestion);
}

function showQuestion(questionIndex) {
    const question = assessmentQuestions[questionIndex];
    const questionsContainer = document.getElementById('assessment-questions');
    
    // Update progress
    updateProgress(questionIndex + 1, assessmentQuestions.length);
    
    // Create question HTML
    const questionHTML = `
        <div class="question-slide" id="question-${question.id}">
            <h3 class="text-2xl font-bold mb-8 text-center">${question.question}</h3>
            <div class="space-y-4">
                ${question.options.map((option, index) => `
                    <button 
                        onclick="selectAnswer(${question.id}, '${option.value}')" 
                        class="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border-2 border-transparent hover:border-blue-300 transition-all duration-200"
                    >
                        <div class="flex items-center">
                            <div class="w-6 h-6 border-2 border-gray-300 rounded-full mr-4 flex items-center justify-center">
                                <div class="w-3 h-3 bg-blue-500 rounded-full opacity-0 transition-opacity duration-200 option-dot"></div>
                            </div>
                            <span class="text-gray-700">${option.text}</span>
                        </div>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    questionsContainer.innerHTML = questionHTML;
    
    // Animate question appearance
    anime({
        targets: '.question-slide',
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuart'
    });
}

function selectAnswer(questionId, answerValue) {
    // Store answer
    assessmentAnswers.push({
        questionId: questionId,
        answer: answerValue
    });
    
    // Visual feedback
    const selectedButton = event.target.closest('button');
    const optionDot = selectedButton.querySelector('.option-dot');
    
    selectedButton.classList.add('border-blue-500', 'bg-blue-50');
    optionDot.classList.remove('opacity-0');
    
    // Disable all buttons
    const allButtons = document.querySelectorAll('#assessment-questions button');
    allButtons.forEach(button => {
        button.disabled = true;
        button.classList.add('cursor-not-allowed');
    });
    
    // Move to next question after delay
    setTimeout(() => {
        nextQuestion();
    }, 800);
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < assessmentQuestions.length) {
        showQuestion(currentQuestion);
    } else {
        showResults();
    }
}

function updateProgress(current, total) {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    const percentage = (current / total) * 100;
    progressBar.style.width = percentage + '%';
    progressText.textContent = `${current} of ${total}`;
}

function showResults() {
    const progress = document.getElementById('assessment-progress');
    const questions = document.getElementById('assessment-questions');
    const results = document.getElementById('assessment-results');
    
    progress.classList.add('hidden');
    questions.classList.add('hidden');
    results.classList.remove('hidden');
    
    // Calculate results
    const analysis = analyzeAnswers(assessmentAnswers);
    displayResults(analysis);
}

function analyzeAnswers(answers) {
    // Simple analysis logic - in a real application, this would be more sophisticated
    let scores = {
        powerInfluence: 0,
        promotionStrategy: 0,
        boardDiversity: 0
    };
    
    answers.forEach(answer => {
        const value = answer.answer;
        
        // Scoring logic based on answer values
        if (value === 'influence' || value === 'networking' || value === 'excellent' || value === 'strategic-thinking') {
            scores.powerInfluence += 2;
        }
        if (value === 'promotion' || value === 'senior-leadership' || value === 'c-suite' || value === 'very-strategic') {
            scores.promotionStrategy += 2;
        }
        if (value === 'current-board' || value === 'experienced' || value === 'c-suite') {
            scores.boardDiversity += 2;
        }
        if (value === 'interested' || value === 'leadership' || value === 'team-leadership') {
            scores.boardDiversity += 1;
            scores.promotionStrategy += 1;
        }
    });
    
    // Determine primary recommendation
    let primaryProgram = 'powerInfluence';
    let maxScore = scores.powerInfluence;
    
    if (scores.promotionStrategy > maxScore) {
        primaryProgram = 'promotionStrategy';
        maxScore = scores.promotionStrategy;
    }
    
    if (scores.boardDiversity > maxScore) {
        primaryProgram = 'boardDiversity';
        maxScore = scores.boardDiversity;
    }
    
    return {
        primaryProgram: primaryProgram,
        scores: scores,
        recommendations: generateRecommendations(primaryProgram, scores)
    };
}

function generateRecommendations(primaryProgram, scores) {
    const recommendations = {
        powerInfluence: {
            title: "Power & Influence Program",
            description: "Based on your responses, you would benefit most from our Power & Influence program. This will help you build strategic networks and develop the executive presence needed for career advancement.",
            nextSteps: ["Focus on network diagnostic", "Develop influence mapping strategies", "Build executive presence"]
        },
        promotionStrategy: {
            title: "Promotion Strategy Program", 
            description: "Your responses indicate you're ready for our Promotion Strategy program. This will help you navigate career transitions and position yourself for senior leadership roles.",
            nextSteps: ["Complete transition readiness assessment", "Develop strategic positioning plan", "Create 90-day integration roadmap"]
        },
        boardDiversity: {
            title: "Get On Board Program",
            description: "You're an ideal candidate for our Get On Board program. This specialized coaching will prepare you for board-level responsibilities and governance roles.",
            nextSteps: ["Complete board readiness evaluation", "Learn governance fundamentals", "Develop board placement strategy"]
        }
    };
    
    return recommendations[primaryProgram];
}

function displayResults(analysis) {
    const resultsContent = document.getElementById('results-content');
    
    const resultsHTML = `
        <div class="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-8">
            <h4 class="text-2xl font-bold mb-4 text-gray-800">${analysis.recommendations.title}</h4>
            <p class="text-gray-700 text-lg leading-relaxed mb-6">${analysis.recommendations.description}</p>
            
            <div class="grid md:grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                    <div class="text-3xl font-bold text-blue-600">${analysis.scores.powerInfluence}</div>
                    <div class="text-sm text-gray-600">Power & Influence</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-green-600">${analysis.scores.promotionStrategy}</div>
                    <div class="text-sm text-gray-600">Promotion Strategy</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-purple-600">${analysis.scores.boardDiversity}</div>
                    <div class="text-sm text-gray-600">Board Diversity</div>
                </div>
            </div>
            
            <div class="text-left">
                <h5 class="font-semibold mb-3 text-gray-800">Recommended Next Steps:</h5>
                <ul class="space-y-2">
                    ${analysis.recommendations.nextSteps.map(step => `
                        <li class="flex items-center text-gray-700">
                            <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            ${step}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    
    resultsContent.innerHTML = resultsHTML;
    
    // Animate results appearance
    anime({
        targets: '#results-content',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuart'
    });
}

function bookConsultation() {
    // Store assessment results in session storage for consultation booking
    sessionStorage.setItem('assessmentResults', JSON.stringify({
        answers: assessmentAnswers,
        timestamp: new Date().toISOString()
    }));
    
    // Redirect to contact page
    window.location.href = 'contact.html';
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
    
    // Remove after delay
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuart',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Form validation utilities
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Smooth scroll utility
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Export functions for use in other pages
window.careerCoaching = {
    startAssessment,
    bookConsultation,
    showNotification,
    validateEmail,
    validatePhone,
    smoothScrollTo,
    toggleMobileMenu
};