$base = "https://docs.google.com/forms/d/e/1FAIpQLSc8DndbzJ8l2qkJ1A653Nqh7JRjfEFlWspUdK_DiEh918-TFg/viewform?usp=pp_url"
$fields = [ordered]@{
  "entry.1851446127" = "Kiara Caesar"
  "entry.2143303719" = "Web Designer"
  "entry.994020448" = "Novaris"
  "entry.880250943" = "Novaris builds tools for high-stakes professional transitions. Our live product, Interview Room by Novaris, offers role-specific mock interviews across 16 career majors and 320 job tracks — timed prompts, structured debriefs, and honest practice before the real interview."
  "entry.1266743178" = "Job seekers and students preparing for real hiring conversations — ages roughly 18–45, often applying for their first role or changing careers. They care about clarity under pressure, not generic puzzle dumps. Audience spans healthcare, trades, education, tech, business, and other majors. They want structured practice, honest feedback, and confidence before the threshold moment."
  "entry.230140762" = "Analogous neutrals with complementary accent — warm cream/paper tones as the base, deep ink for text, with teal as primary accent and burnt orange as secondary warm accent."
  "entry.1155424742" = "Ink #14181f, Paper #f3f0ea, Panel #fffdf8, Band #e8e3da, Muted #5c6570, Teal #0f766e, Burnt orange #c2410c"
  "entry.2001883006" = "Teal #0f766e (burnt orange #c2410c for CTAs)"
  "entry.1764754085" = "Paper cream #f3f0ea (cards/panels #fffdf8)"
  "entry.614278306" = "The warm cream background feels calm and approachable — a safe place to practice before stress. Deep ink text signals seriousness and credibility. Teal suggests growth, clarity, and forward motion. Burnt orange adds energy for CTAs. Together: calm preparation, professional trust, and quiet confidence."
  "entry.360274959" = "Fraunces (serif, 600–700 weight)"
  "entry.1709827002" = "Fraunces (650) or Figtree (600)"
  "entry.1456317472" = "Figtree (400–500 weight)"
}
$brandWords = @("Modern", "Professional", "Sophisticated", "Minimalist", "Bold")
$parts = foreach ($k in $fields.Keys) { "{0}={1}" -f $k, [uri]::EscapeDataString($fields[$k]) }
$parts += foreach ($w in $brandWords) { "entry.86436586={0}" -f [uri]::EscapeDataString($w) }
$url = "$base&$($parts -join '&')"
$url
