import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Mock data for blog posts (in a real application, this would come from a database or API)
const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Regular Chiropractic Care",
    content: `
      <div class="mb-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly%20The%20Benefits%20of%20Regular%20Chiropractic%20Care%2053795.jpg-5FGjqzNeaFo0AjQ4ydPnUFT6n4WpK7.jpeg"
          alt="Chiropractor providing professional care to a patient"
          class="rounded-xl mx-auto w-full h-auto max-w-3xl"
        />
      </div>

      <p>Regular chiropractic care offers numerous benefits that extend far beyond just relieving back pain. As a practicing chiropractor for over 15 years, I've witnessed firsthand the transformative effects of consistent chiropractic treatments on overall health and well-being.</p>

      <h2>1. Improved Spinal Health</h2>
      <p>The spine is the central support structure of our body. Regular adjustments help maintain proper spinal alignment, reducing the risk of degenerative spinal conditions and promoting optimal nervous system function.</p>

      <h2>2. Enhanced Immune Function</h2>
      <p>Research has shown that chiropractic adjustments can boost the immune system. A study published in the Journal of Manipulative and Physiological Therapeutics found that people who received chiropractic care had higher levels of a specific signaling molecule associated with immune function[1].</p>

      <h2>3. Stress Reduction</h2>
      <p>Chiropractic care can help reduce physical and mental stress. By releasing muscle tension and improving blood flow, regular adjustments can lead to a more relaxed state of being.</p>

      <h2>4. Better Sleep</h2>
      <p>Many patients report improved sleep quality after beginning regular chiropractic care. This is likely due to reduced pain and increased relaxation.</p>

      <h2>5. Increased Energy</h2>
      <p>By removing interference in the nervous system, chiropractic care can lead to increased energy levels and improved overall vitality.</p>

      <p>While these benefits are significant, it's important to remember that chiropractic care is most effective when combined with a healthy lifestyle, including proper nutrition and regular exercise.</p>

      <p>References:</p>
      <ol>
        <li>Teodorczyk-Injeyan JA, Injeyan HS, Ruegg R. Spinal manipulative therapy reduces inflammatory cytokines but not substance P production in normal subjects. J Manipulative Physiol Ther. 2006 Jan;29(1):14-21.</li>
      </ol>
    `,
    date: "2025-02-15",
    author: "Dr. Diego Montes",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly%20The%20Benefits%20of%20Regular%20Chiropractic%20Care%2030775.jpg-f7Ix1Ym2xhVWKLDoPqT3KYWd19uMB2.jpeg",
    category: "Wellness",
  },
  {
    id: 2,
    title: "5 Exercises to Improve Your Posture",
    content: `
      <p>As a chiropractor, I often see patients struggling with poor posture, which can lead to a host of health issues including back pain, neck strain, and even headaches. Here are five exercises I recommend to help improve your posture:</p>

      <h2>1. Wall Angels</h2>
      <p>This exercise helps to strengthen the muscles between your shoulder blades and improve upper back posture.</p>
      <ul>
        <li>Stand with your back against a wall, feet shoulder-width apart.</li>
        <li>Press your lower back, upper back, and head against the wall.</li>
        <li>Raise your arms to shoulder height, bent at the elbows, and press them against the wall.</li>
        <li>Slowly slide your arms up the wall, then back down. Repeat 10-15 times.</li>
      </ul>

      <h2>2. Chin Tucks</h2>
      <p>This exercise helps to strengthen the deep cervical flexors, which are crucial for proper neck posture.</p>
      <ul>
        <li>Sit or stand with your back straight.</li>
        <li>Tuck your chin down and back, creating a "double chin".</li>
        <li>Hold for 5 seconds, then release. Repeat 10 times.</li>
      </ul>

      <h2>3. Doorway Chest Stretch</h2>
      <p>This stretch helps to open up the chest and counteract the forward shoulder posture many of us develop from sitting at desks.</p>
      <ul>
        <li>Stand in a doorway with your arms raised and elbows bent at 90 degrees.</li>
        <li>Place your hands on the door frame.</li>
        <li>Lean forward through the doorway until you feel a stretch across your chest.</li>
        <li>Hold for 30 seconds. Repeat 3 times.</li>
      </ul>

      <h2>4. Bird Dog</h2>
      <p>This exercise strengthens the core and lower back muscles, which are essential for maintaining good posture.</p>
      <ul>
        <li>Start on your hands and knees.</li>
        <li>Extend your right arm forward and left leg back, keeping your back straight.</li>
        <li>Hold for 5 seconds, then return to the starting position.</li>
        <li>Repeat with the left arm and right leg. Do 10 repetitions on each side.</li>
      </ul>

      <h2>5. Plank</h2>
      <p>Planks are excellent for strengthening the core, which is crucial for maintaining good posture throughout the day.</p>
      <ul>
        <li>Start in a push-up position, with your forearms on the ground.</li>
        <li>Keep your body in a straight line from head to heels.</li>
        <li>Hold this position for 30 seconds to 1 minute.</li>
      </ul>

      <p>Remember, consistency is key when it comes to improving your posture. Try to incorporate these exercises into your daily routine for the best results. As always, if you experience any pain while performing these exercises, stop immediately and consult with a healthcare professional.</p>

      <p>References:</p>
      <ol>
        <li>Kim D, Cho M, Park Y, Yang Y. Effect of an exercise program for posture correction on musculoskeletal pain. J Phys Ther Sci. 2015 Jun;27(6):1791-4.</li>
        <li>Harman K, Hubley-Kozey CL, Butler H. Effectiveness of an exercise program to improve forward head posture in normal adults: a randomized, controlled 10-week trial. J Man Manip Ther. 2005;13(3):163-176.</li>
      </ol>
    `,
    date: "2025-02-10",
    author: "Dr. Diego Montes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%202-Wq5JyjmeoOKbKz1ND4y6NHrAoHsj8B.webp",
    category: "Exercise",
  },
  {
    id: 3,
    title: "Understanding and Managing Sciatica",
    content: `
      <div class="mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly%20Understanding%20and%20Managing%20Sciatica%2030775.jpg-RRVd7hoBh1RVMw0DTXlcCAguBPQ7aI.jpeg"
          alt="Anatomical model showing the spine and sciatic nerve pathway"
          width={800}
          height={800}
          className="rounded-xl mx-auto"
        />
      </div>

      <p>Sciatica is a common condition that affects millions of people worldwide, causing pain that radiates along the path of the sciatic nerve. This nerve runs from your lower back through your hips and buttocks and down each leg.</p>

      <h2>Understanding Sciatica</h2>
      <p>The sciatic nerve is the largest nerve in the body, and when it becomes compressed or irritated, it can cause significant discomfort. Common causes include:</p>
      <ul>
        <li>Herniated or slipped discs</li>
        <li>Bone spurs on the spine</li>
        <li>Spinal stenosis (narrowing of the spine)</li>
        <li>Piriformis syndrome</li>
      </ul>

      <h2>Symptoms of Sciatica</h2>
      <p>Common symptoms include:</p>
      <ul>
        <li>Lower back pain that extends down one leg</li>
        <li>Numbness or tingling in the affected leg</li>
        <li>Weakness in the leg or foot</li>
        <li>Sharp, burning sensation along the nerve pathway</li>
      </ul>

      <h2>Managing Sciatica Through Chiropractic Care</h2>
      <p>Chiropractic treatment can be highly effective in managing sciatica. Our approach includes:</p>
      <ul>
        <li>Spinal adjustments to relieve nerve pressure</li>
        <li>Targeted exercises to strengthen supporting muscles</li>
        <li>Posture correction techniques</li>
        <li>Lifestyle modifications to prevent recurrence</li>
      </ul>

      <h2>Prevention Strategies</h2>
      <p>To help prevent sciatica flare-ups:</p>
      <ul>
        <li>Maintain good posture</li>
        <li>Exercise regularly to strengthen core muscles</li>
        <li>Use proper lifting techniques</li>
        <li>Take regular breaks from sitting</li>
        <li>Maintain a healthy weight</li>
      </ul>

      <h2>When to Seek Professional Help</h2>
      <p>Contact a healthcare provider if you experience:</p>
      <ul>
        <li>Severe pain that persists or worsens</li>
        <li>Numbness or weakness that affects daily activities</li>
        <li>Loss of bladder or bowel control</li>
        <li>Symptoms that don't improve with self-care</li>
      </ul>

      <p>Remember, early intervention is key to preventing chronic issues. Our team at Dr. Diego Montes Chiropractic is experienced in treating sciatica and can develop a personalized treatment plan to address your specific needs.</p>

      <p>References:</p>
      <ol>
        <li>Journal of Manipulative and Physiological Therapeutics, "Chiropractic Treatment of Sciatica", 2024</li>
        <li>Spine Health Institute, "Understanding and Treating Sciatica", 2023</li>
      </ol>
    `,
    date: "2025-02-05",
    author: "Dr. Diego Montes",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly%20Understanding%20and%20Managing%20Sciatica%2030775.jpg-RRVd7hoBh1RVMw0DTXlcCAguBPQ7aI.jpeg",
    category: "Pain Management",
  },
  {
    id: 4,
    title: "Nutrition Tips for a Healthy Spine",
    content: `
      <p>Maintaining a healthy spine isn't just about exercise and posture—nutrition plays a crucial role too. The foods you eat can either contribute to inflammation and pain or help reduce it and promote healing. Here are some nutrition tips for a healthy spine:</p>

      <h2>1. Calcium-Rich Foods</h2>
      <p>Calcium is essential for strong bones, including your vertebrae. Good sources include:</p>
      <ul>
        <li>Dairy products (milk, yogurt, cheese)</li>
        <li>Leafy green vegetables (kale, spinach, collard greens)</li>
        <li>Fortified plant-based milk alternatives</li>
        <li>Sardines and canned salmon (with bones)</li>
      </ul>

      <h2>2. Vitamin D</h2>
      <p>Vitamin D helps your body absorb calcium. Sources include:</p>
      <ul>
        <li>Sunlight exposure (with proper sun protection)</li>
        <li>Fatty fish (salmon, mackerel, tuna)</li>
        <li>Egg yolks</li>
        <li>Fortified foods</li>
      </ul>

      <h2>3. Anti-Inflammatory Foods</h2>
      <p>Reducing inflammation can help alleviate back pain. Include these in your diet:</p>
      <ul>
        <li>Berries (strawberries, blueberries, raspberries)</li>
        <li>Fatty fish rich in omega-3s</li>
        <li>Nuts and seeds</li>
        <li>Olive oil</li>
        <li>Leafy green vegetables</li>
      </ul>

      <h2>4. Magnesium-Rich Foods</h2>
      <p>Magnesium helps maintain muscle and nerve function. Good sources include:</p>
      <ul>
        <li>Nuts and seeds (almonds, pumpkin seeds)</li>
        <li>Whole grains</li>
        <li>Legumes</li>
        <li>Avocados</li>
      </ul>

      <h2>5. Collagen-Boosting Foods</h2>
      <p>Collagen is crucial for maintaining the strength and flexibility of your spinal discs. Include:</p>
      <ul>
        <li>Bone broth</li>
        <li>Chicken</li>
        <li>Fish</li>
        <li>Egg whites</li>
        <li>Citrus fruits (for vitamin C, which aids collagen production)</li>
      </ul>

      <h2>6. Stay Hydrated</h2>
      <p>Proper hydration is essential for spinal disc health. Aim for at least 8 glasses of water a day.</p>

      <h2>7. Foods to Limit</h2>
      <p>Some foods can contribute to inflammation and should be consumed in moderation:</p>
      <ul>
        <li>Processed foods</li>
        <li>Sugary drinks and snacks</li>
        <li>Excessive alcohol</li>
        <li>Trans fats</li>
      </ul>

      <p>Remember, a balanced diet rich in fruits, vegetables, lean proteins, and whole grains is key to overall  a balanced diet rich in fruits, vegetables, lean proteins, and whole grains is key to overall spinal health and wellness. By incorporating these nutrition tips into your daily routine, you can support your spine's health and potentially reduce the risk of back pain and related issues.

<p>Always consult with a healthcare professional or registered dietitian before making significant changes to your diet, especially if you have existing health conditions or are taking medications.</p>

<p>References:</p>
<ol>
  <li>Rondanelli M, et al. "Nutrition and Bone Health: The Role of Micronutrients." Nutrients. 2020 Dec 22;13(1):11.</li>
  <li>Elma Ö, et al. "Do Nutritional Factors Interact with Chronic Musculoskeletal Pain? A Systematic Review." J Clin Med. 2020 Mar 24;9(3):702.</li>
</ol>
    `,
    date: "2025-01-30",
    author: "Dr. Diego Montes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-11WqBuJnUgyVG1RBZjsGDNkGRM0Wxt.webp",
    category: "Nutrition",
  },
  {
    id: 5,
    title: "The Connection Between Chiropractic Care and Stress Relief",
    content: `
      <p>Stress is an unavoidable part of modern life, but its impact on our physical and mental health can be significant. While many people associate chiropractic care primarily with back pain relief, it can also play a crucial role in managing stress. Let's explore the connection between chiropractic care and stress relief.</p>

      <h2>Understanding the Stress-Body Connection</h2>
      <p>When we experience stress, our bodies react in various ways:</p>
      <ul>
        <li>Muscle tension, especially in the neck, shoulders, and back</li>
        <li>Increased heart rate and blood pressure</li>
        <li>Shallow breathing</li>
        <li>Hormonal changes, including increased cortisol production</li>
      </ul>
      <p>Over time, chronic stress can lead to physical symptoms and health issues, including headaches, fatigue, and even digestive problems.</p>

      <h2>How Chiropractic Care Helps Manage Stress</h2>
      <ol>
        <li><strong>Releases Muscle Tension:</strong> Chiropractic adjustments can help release tension in the muscles, particularly in the neck and back, where we often hold stress.</li>
        <li><strong>Improves Nervous System Function:</strong> By ensuring proper spinal alignment, chiropractic care can help optimize nervous system function, potentially improving the body's ability to handle stress.</li>
        <li><strong>Promotes Relaxation:</strong> Many patients report feeling more relaxed after chiropractic treatments, which can help counteract the effects of stress.</li>
        <li><strong>Enhances Sleep Quality:</strong> By reducing pain and promoting relaxation, chiropractic care can lead to better sleep, which is crucial for stress management.</li>
        <li><strong>Encourages Mindfulness:</strong> Regular chiropractic visits can increase body awareness, encouraging patients to be more mindful of their posture and tension levels throughout the day.</li>
      </ol>

      <h2>Chiropractic Techniques for Stress Relief</h2>
      <p>Several chiropractic techniques can be particularly beneficial for stress relief:</p>
      <ul>
        <li><strong>Spinal Manipulation:</strong> Helps restore proper alignment and reduce muscle tension.</li>
        <li><strong>Soft Tissue Therapy:</strong> Can help relax tense muscles and improve circulation.</li>
        <li><strong>Breathing Exercises:</strong> Chiropractors often teach breathing techniques to help manage stress and promote relaxation.</li>
        <li><strong>Posture Advice:</strong> Proper posture can help reduce physical stress on the body.</li>
      </ul>

      <h2>Lifestyle Recommendations</h2>
      <p>In addition to chiropractic treatments, your chiropractor may recommend lifestyle changes to help manage stress:</p>
      <ul>
        <li>Regular exercise</li>
        <li>Proper nutrition</li>
        <li>Adequate sleep</li>
        <li>Mindfulness practices like meditation or yoga</li>
        <li>Ergonomic improvements at work and home</li>
      </ul>

      <h2>Concdrdiegomontes</h2>
      <p>While chiropractic care is not a cure-all for stress, it can be an effective component of a comprehensive stress management plan. By addressing the physical manifestations of stress and promoting overall wellness, chiropractic care can help you better cope with life's challenges.</p>

      <p>If you're feeling overwhelmed by stress, consider scheduling a consultation with Dr. Diego Montes to discuss how chiropractic care might benefit you.</p>

      <p>References:</p>
      <ol>
        <li>Jamison JR. "Stress: the chiropractic patients' self-perceptions." J Manipulative Physiol Ther. 1999 Jul-Aug;22(6):395-8.</li>
        <li>Goertz CM, et al. "Patient-centered outcomes of high-velocity, low-amplitude spinal manipulation for low back pain: a systematic review." J Electromyogr Kinesiol. 2012 Oct;22(5):670-91.</li>
      </ol>
    `,
    date: "2025-01-25",
    author: "Dr. Diego Montes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1774-3cacLNcvFZXaRXN2ZVJcDAyhn85YaJ.jpeg",
    category: "Wellness",
  },
  {
    id: 6,
    title: "Chiropractic Care for Athletes: Enhancing Performance and Recovery",
    content: `
      <p>As an athlete, your body is your most valuable asset. Whether you're a professional competitor or a weekend warrior, maintaining optimal physical condition is crucial for performance and longevity in your sport. Chiropractic care can play a significant role in helping athletes achieve peak performance and recover more quickly from injuries.</p>

      <h2>Benefits of Chiropractic Care for Athletes</h2>
      <ol>
        <li><strong>Improved Range of Motion:</strong> Chiropractic adjustments can help increase flexibility and range of motion, which is essential for most sports.</li>
        <li><strong>Enhanced Performance:</strong> By ensuring proper spinal alignment and joint function, chiropractic care can help athletes perform at their best.</li>
        <li><strong>Faster Recovery:</strong> Regular adjustments can aid in quicker recovery times after intense training or competition.</li>
        <li><strong>Injury Prevention:</strong> By addressing minor misalignments before they become major issues, chiropractic care can help prevent injuries.</li>
        <li><strong>Drug-Free Pain Management:</strong> For athletes dealing with chronic pain, chiropractic offers a non-pharmaceutical approach to pain management.</li>
      </ol>

      <h2>Chiropractic Techniques for Athletes</h2>
      <p>Several chiropractic techniques are particularly beneficial for athletes:</p>
      <ul>
        <li><strong>Spinal Manipulation:</strong> Restores proper alignment and reduces nerve interference.</li>
        <li><strong>Active Release Technique (ART):</strong> Addresses soft tissue injuries and scar tissue.</li>
        <li><strong>Kinesio Taping:</strong> Supports muscles and joints during activity.</li>
        <li><strong>Instrument-Assisted Soft Tissue Mobilization (IASTM):</strong> Helps break down scar tissue and promote healing.</li>
        <li><strong>Sports-Specific Exercises:</strong> Tailored exercises to improve strength and flexibility for your particular sport.</li>
      </ul>

      <h2>Sport-Specific Benefits</h2>
      <p>Chiropractic care can be tailored to the unique demands of different sports:</p>
      <ul>
        <li><strong>Runners:</strong> Addressing issues like iliotibial band syndrome and plantar fasciitis.</li>
        <li><strong>Golfers:</strong> Improving spinal rotation and reducing the risk of lower back pain.</li>
        <li><strong>Football Players:</strong> Managing the impact of collisions and improving overall body mechanics.</li>
        <li><strong>Swimmers:</strong> Enhancing shoulder mobility and addressing postural issues.</li>
        <li><strong>Tennis Players:</strong> Treating and preventing tennis elbow and improving serve mechanics.</li>
      </ul>

      <h2>Integrating Chiropractic Care into Your Training Regimen</h2>
      <p>To get the most out of chiropractic care:</p>
      <ol>
        <li>Schedule regular check-ups, not just when you're in pain.</li>
        <li>Communicate clearly with your chiropractor about your training schedule and any upcoming competitions.</li>
        <li>Follow through with any recommended at-home exercises or stretches.</li>
        <li>Consider chiropractic care as part of your pre-competition preparation and post-competition recovery.</li>
      </ol>

      <h2>Concdrdiegomontes</h2>
      <p>Chiropractic care can be a valuable tool for athletes looking to enhance their performance, speed up recovery, and prevent injuries. By working with a chiropractor who understands the unique demands of your sport, you can develop a personalized care plan that supports your athletic goals.</p>

      <p>At Dr. Diego Montes Chiropractic, we have experience working with athletes at all levels. If you're looking to take your performance to the next level, consider scheduling a consultation to discuss how chiropractic care can benefit your athletic career.</p>

      <p>References:</p>
      <ol>
        <li>Miners AL. "Chiropractic treatment and the enhancement of sport performance: a narrative literature review." J Can Chiropr Assoc. 2010 Dec;54(4):210-21.</li>
        <li>Nook DD, et al. "Utilization and practice patterns of neurodynamics in sports physical therapies." J Man Manip Ther. 2016 Feb;24(1):14-21.</li>
      </ol>
    `,
    date: "2025-01-20",
    author: "Dr. Diego Montes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1807-y1KigXf3s5xnXdJsOrgwe4XRWGlix0.jpeg",
    category: "Sports",
  },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <main className="min-h-screen bg-[#F0F1FA] pt-16">
      <div className="container mx-auto px-4">
        <article className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="relative h-96">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
              objectPosition={post.id === 6 ? "center 40%" : post.id === 5 ? "center 30%" : "center center"} // Updated objectPosition prop
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center bg-black text-white hover:bg-gray-800 transition-colors -mt-16 mb-4 relative z-10 px-4 py-2 rounded-md"
            >
              <ArrowLeft className="mr-2 text-white" />
              Back to Blog
            </Link>
          </div>
          <div className="p-8">
            <div className="mb-4">
              <span className="text-sm text-gray-500">
                {post.category} • {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
            <h1 className="text-4xl font-light mb-6">{post.title}</h1>
            <div className="flex items-center mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1774-3cacLNcvFZXaRXN2ZVJcDAyhn85YaJ.jpeg"
                alt="Dr. Diego Montes"
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-gray-500">Chiropractor & Wellness Expert</p>
              </div>
            </div>
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
      <div className="mt-12 -mx-4">
        <div className="bg-black text-white py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready to Improve Your
              <br />
              Health?
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Take the first step towards a healthier, pain-free life with Dr. Diego Montes.
            </p>
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-normal inline-flex items-center mb-12"
            >
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="w-1/2 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </div>
      <div className="h-px bg-white"></div>
    </main>
  )
}

